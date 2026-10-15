import { z } from "zod";

export const enquirySchema = z.object({
  fullName: z
    .string()
    .min(2, "Please enter your full name (at least 2 characters)")
    .max(100, "Name is too long"),
  institutionName: z
    .string()
    .min(3, "Please enter your institution or organization name")
    .max(150, "Institution name is too long"),
  workEmail: z
    .string()
    .email("Please provide a valid official/work email address"),
  phoneNumber: z
    .string()
    .min(10, "Please enter a valid 10-digit phone number")
    .regex(/^[0-9+\-\s()]+$/, "Phone number can only contain numbers, +, -, and spaces"),
  institutionType: z.enum(
    ["School", "College", "University", "EdTech / NGO", "Other"],
    {
      required_error: "Please select your institution type",
    }
  ),
  areaOfInterest: z.enum(
    [
      "Child Wellbeing & Counselling",
      "Career Guidance (Grades 8–12)",
      "Teacher Training & CPD",
      "AI, STEM & Tinkering Labs",
      "Industry Projects & Internships",
      "Applied AI & Tech Bootcamps",
      "Placement Readiness",
      "Outbound & Experiential Camps",
      "Industrial Visits",
      "Institutional Event Management",
      "Other Custom Program",
    ],
    {
      required_error: "Please select an area of interest",
    }
  ),
  deliveryFormat: z.enum(
    [
      "On-Campus In-Person",
      "Hybrid (Campus + Online)",
      "Off-Site Outbound Immersion",
      "Live Virtual Sessions",
    ],
    {
      required_error: "Please select your preferred delivery format",
    }
  ),
  participantCount: z.enum(
    [
      "Under 50 participants",
      "50 – 150 participants",
      "150 – 500 participants",
      "500+ participants (Campus-wide)",
    ],
    {
      required_error: "Please select expected participant cohort size",
    }
  ),
  preferredTimeframe: z
    .string()
    .min(2, "Please specify an expected timeframe (e.g. Next Month, Upcoming Semester, Q3 2026)"),
  message: z
    .string()
    .min(15, "Please share a few details about your institutional goals or specific requirements (min 15 characters)")
    .max(1500, "Message is too long (maximum 1500 characters)"),
  privacyConsent: z.literal(true, {
    errorMap: () => ({
      message: "You must agree to the privacy policy to submit an institutional enquiry",
    }),
  }),
  // Honeypot field for bot spam prevention
  company_website_hp: z.string().optional(),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;
