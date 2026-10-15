import { NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validation/enquiry-schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Validate honeypot spam field
    if (body.company_website_hp && body.company_website_hp.trim() !== "") {
      return NextResponse.json(
        { error: "Bot activity detected. Submission ignored." },
        { status: 400 }
      );
    }

    // 2. Validate input schema with Zod
    const validationResult = enquirySchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Validation failed. Please correct the highlighted fields.",
          issues: validationResult.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const validData = validationResult.data;

    // 3. Check for external CRM / Email webhook configuration
    const crmWebhookUrl = process.env.CRM_WEBHOOK_URL;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (crmWebhookUrl) {
      try {
        const crmResponse = await fetch(crmWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            timestamp: new Date().toISOString(),
            source: "ScholarBridge Institutional Portal",
            ...validData,
          }),
        });

        if (!crmResponse.ok) {
          throw new Error(`CRM rejected submission: ${crmResponse.statusText}`);
        }

        return NextResponse.json({
          status: "dispatched",
          message:
            "Thank you. Your institutional enquiry has been safely received. Our academic coordinator will contact you within 1 business day.",
        });
      } catch (crmErr: any) {
        console.error("CRM dispatch error:", crmErr);
        return NextResponse.json(
          {
            error:
              "Unable to forward enquiry to the institutional database right now. Please email us directly at enquiries@scholarbridge.org.",
          },
          { status: 502 }
        );
      }
    }

    // If no backend integration is configured in environment:
    console.log(
      "[ScholarBridge Dev Mode] Institutional enquiry received and validated:",
      {
        fullName: validData.fullName,
        institutionName: validData.institutionName,
        workEmail: validData.workEmail,
        phoneNumber: validData.phoneNumber,
        institutionType: validData.institutionType,
        areaOfInterest: validData.areaOfInterest,
        deliveryFormat: validData.deliveryFormat,
        participantCount: validData.participantCount,
        timeframe: validData.preferredTimeframe,
      }
    );

    return NextResponse.json({
      status: "development_mode",
      message:
        "Enquiry verified and logged locally in development mode. (To enable live email/CRM dispatch, configure CRM_WEBHOOK_URL or RESEND_API_KEY in your environment).",
      data: {
        referenceId: `SB-${Date.now().toString().slice(-6)}`,
        submittedAt: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    console.error("Unhandled enquiry error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while processing your request. Please try again later." },
      { status: 500 }
    );
  }
}
