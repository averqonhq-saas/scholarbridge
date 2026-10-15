"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Building2,
  Mail,
  Phone,
  User,
  Info,
} from "lucide-react";
import {
  enquirySchema,
  type EnquiryFormValues,
} from "@/lib/validation/enquiry-schema";
import { Button } from "@/components/ui/Button";

interface EnquiryFormProps {
  initialInterest?: string;
  initialType?: string;
}

export function EnquiryForm({
  initialInterest,
  initialType,
}: EnquiryFormProps) {
  const [submissionState, setSubmissionState] = useState<{
    status: "idle" | "loading" | "success" | "error";
    message?: string;
    mode?: "dispatched" | "development_mode";
    referenceId?: string;
  }>({ status: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      fullName: "",
      institutionName: "",
      workEmail: "",
      phoneNumber: "",
      institutionType: (initialType as any) || "School",
      areaOfInterest: (initialInterest as any) || "Child Wellbeing & Counselling",
      deliveryFormat: "On-Campus In-Person",
      participantCount: "50 – 150 participants",
      preferredTimeframe: "",
      message: "",
      privacyConsent: true,
      company_website_hp: "",
    },
  });

  const onSubmit = async (data: EnquiryFormValues) => {
    setSubmissionState({ status: "loading" });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Failed to submit enquiry. Please try again."
        );
      }

      setSubmissionState({
        status: "success",
        message: result.message,
        mode: result.status,
        referenceId: result.data?.referenceId,
      });

      reset();
    } catch (err: any) {
      setSubmissionState({
        status: "error",
        message:
          err.message ||
          "An unexpected error occurred. Please contact us directly at enquiries@scholarbridge.org.",
      });
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200">
      {/* Success Notification Alert */}
      {submissionState.status === "success" && (
        <div className="mb-8 rounded-2xl bg-teal-50 border border-teal-200 p-6 text-teal-900">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-teal-700 shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-teal-950">
                Enquiry Successfully Logged
              </h3>
              <p className="text-sm leading-relaxed text-teal-800">
                {submissionState.message}
              </p>
              {submissionState.referenceId && (
                <div className="inline-block bg-teal-100/80 text-teal-900 font-mono text-xs px-3 py-1 rounded-md font-semibold mt-1">
                  Enquiry Reference: {submissionState.referenceId}
                </div>
              )}
              {submissionState.mode === "development_mode" && (
                <div className="mt-3 text-xs bg-white/80 p-3 rounded-xl border border-teal-200 text-slate-700 flex items-start gap-2">
                  <Info className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-950">System Notice:</strong> Server-side validation succeeded and your enquiry has been captured in the local execution log. In production, this connects to institutional email/CRM via the documented environment variables.
                  </div>
                </div>
              )}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSubmissionState({ status: "idle" })}
                  className="text-xs font-bold text-teal-900 underline hover:text-teal-950"
                >
                  Submit Another Institutional Enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Error Notification Alert */}
      {submissionState.status === "error" && (
        <div className="mb-8 rounded-2xl bg-red-50 border border-red-200 p-5 text-red-900 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-sm">Submission Issue</h4>
            <p className="text-xs text-red-800">{submissionState.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        {/* Spam Prevention Honeypot Field (invisible to regular users) */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="company_website_hp">Leave this empty</label>
          <input
            id="company_website_hp"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("company_website_hp")}
          />
        </div>

        {/* 2-Column: Name & Work Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="fullName"
                type="text"
                placeholder="e.g. Dr. Ramesh Sharma / Principal Meera Sen"
                {...register("fullName")}
                className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.fullName
                    ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                    : "border-slate-300 focus:ring-teal-600 focus:border-teal-600"
                }`}
                aria-invalid={errors.fullName ? "true" : "false"}
              />
            </div>
            {errors.fullName && (
              <p className="mt-1.5 text-xs text-red-600 font-medium">
                {errors.fullName.message}
              </p>
            )}
          </div>

          {/* Work Email */}
          <div>
            <label
              htmlFor="workEmail"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Official / Work Email <span className="text-red-500">*</span>
            </label>
            <input
              id="workEmail"
              type="email"
              placeholder="principal@institution.edu.in"
              {...register("workEmail")}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.workEmail
                  ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                  : "border-slate-300 focus:ring-teal-600 focus:border-teal-600"
              }`}
              aria-invalid={errors.workEmail ? "true" : "false"}
            />
            {errors.workEmail && (
              <p className="mt-1.5 text-xs text-red-600 font-medium">
                {errors.workEmail.message}
              </p>
            )}
          </div>
        </div>

        {/* 2-Column: Institution Name & Phone Number */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Institution Name */}
          <div>
            <label
              htmlFor="institutionName"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Institution / School Name <span className="text-red-500">*</span>
            </label>
            <input
              id="institutionName"
              type="text"
              placeholder="e.g. Kendriya Vidyalaya / St. Xavier's College"
              {...register("institutionName")}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.institutionName
                  ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                  : "border-slate-300 focus:ring-teal-600 focus:border-teal-600"
              }`}
              aria-invalid={errors.institutionName ? "true" : "false"}
            />
            {errors.institutionName && (
              <p className="mt-1.5 text-xs text-red-600 font-medium">
                {errors.institutionName.message}
              </p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Contact Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              id="phoneNumber"
              type="tel"
              placeholder="+91 98765 43210"
              {...register("phoneNumber")}
              className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.phoneNumber
                  ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                  : "border-slate-300 focus:ring-teal-600 focus:border-teal-600"
              }`}
              aria-invalid={errors.phoneNumber ? "true" : "false"}
            />
            {errors.phoneNumber && (
              <p className="mt-1.5 text-xs text-red-600 font-medium">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
        </div>

        {/* 2-Column: Institution Type & Area of Interest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Institution Type */}
          <div>
            <label
              htmlFor="institutionType"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Institution Type <span className="text-red-500">*</span>
            </label>
            <select
              id="institutionType"
              {...register("institutionType")}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
            >
              <option value="School">School (K-12 / High School)</option>
              <option value="College">College (Autonomous / Affiliated)</option>
              <option value="University">University (State / Central / Deemed)</option>
              <option value="EdTech / NGO">Educational Foundation / NGO</option>
              <option value="Other">Other Institutional Entity</option>
            </select>
          </div>

          {/* Area of Interest */}
          <div>
            <label
              htmlFor="areaOfInterest"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Primary Program of Interest <span className="text-red-500">*</span>
            </label>
            <select
              id="areaOfInterest"
              {...register("areaOfInterest")}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
            >
              <option value="Child Wellbeing & Counselling">Child Wellbeing & Counselling</option>
              <option value="Career Guidance (Grades 8–12)">Career Guidance (Grades 8–12)</option>
              <option value="Teacher Training & CPD">Teacher Training & CPD</option>
              <option value="AI, STEM & Tinkering Labs">AI, STEM & Tinkering Labs</option>
              <option value="Industry Projects & Internships">Industry Projects & Internships</option>
              <option value="Applied AI & Tech Bootcamps">Applied AI & Tech Bootcamps</option>
              <option value="Placement Readiness">Placement Readiness & Mock Interviews</option>
              <option value="Outbound & Experiential Camps">Outbound & Experiential Camps</option>
              <option value="Industrial Visits">Industrial Visits & Facility Tours</option>
              <option value="Institutional Event Management">Institutional Event Management</option>
              <option value="Other Custom Program">Other Custom Institutional Program</option>
            </select>
          </div>
        </div>

        {/* 2-Column: Delivery Format & Participant Count */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="deliveryFormat"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Preferred Delivery Format
            </label>
            <select
              id="deliveryFormat"
              {...register("deliveryFormat")}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
            >
              <option value="On-Campus In-Person">On-Campus In-Person</option>
              <option value="Hybrid (Campus + Online)">Hybrid (Campus + Online)</option>
              <option value="Off-Site Outbound Immersion">Off-Site Outbound Immersion</option>
              <option value="Live Virtual Sessions">Live Virtual Sessions</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="participantCount"
              className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
            >
              Expected Participant Cohort
            </label>
            <select
              id="participantCount"
              {...register("participantCount")}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600"
            >
              <option value="Under 50 participants">Under 50 participants</option>
              <option value="50 – 150 participants">50 – 150 participants</option>
              <option value="150 – 500 participants">150 – 500 participants</option>
              <option value="500+ participants (Campus-wide)">500+ participants (Campus-wide)</option>
            </select>
          </div>
        </div>

        {/* Preferred Date / Timeframe */}
        <div>
          <label
            htmlFor="preferredTimeframe"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Target Timeframe or Academic Term <span className="text-red-500">*</span>
          </label>
          <input
            id="preferredTimeframe"
            type="text"
            placeholder="e.g. Next Month, Upcoming Academic Semester, Post-Examinations"
            {...register("preferredTimeframe")}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.preferredTimeframe
                ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                : "border-slate-300 focus:ring-teal-600 focus:border-teal-600"
            }`}
          />
          {errors.preferredTimeframe && (
            <p className="mt-1.5 text-xs text-red-600 font-medium">
              {errors.preferredTimeframe.message}
            </p>
          )}
        </div>

        {/* Message / Institutional Goals */}
        <div>
          <label
            htmlFor="message"
            className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2"
          >
            Institutional Goals or Specific Requirements <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Please outline your student grade levels, department priorities, or key outcomes you want to accomplish..."
            {...register("message")}
            className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
              errors.message
                ? "border-red-400 focus:ring-red-300 bg-red-50/20"
                : "border-slate-300 focus:ring-teal-600 focus:border-teal-600"
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-600 font-medium">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Privacy Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              {...register("privacyConsent")}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-600"
            />
            <span className="text-xs text-slate-600 leading-relaxed">
              I agree that ScholarBridge may contact our institutional representatives regarding this program enquiry in accordance with the{" "}
              <a href="/privacy" target="_blank" className="text-teal-700 underline font-semibold">
                Privacy Policy
              </a>
              . We respect institutional confidentiality and do not share academic data with third parties.
            </span>
          </label>
          {errors.privacyConsent && (
            <p className="mt-1.5 text-xs text-red-600 font-medium">
              {errors.privacyConsent.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto px-8"
            disabled={isSubmitting}
            icon={
              isSubmitting ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )
            }
          >
            {isSubmitting ? "Verifying & Submitting..." : "Submit Institutional Enquiry"}
          </Button>
        </div>
      </form>
    </div>
  );
}
