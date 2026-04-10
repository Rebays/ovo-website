"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function joinWaitlist(formData: FormData) {
  const email = formData.get("email") as string;

  if (!email) {
    return { error: "Email is required" };
  }

  try {
    // Only attempt to send if API key is present, otherwise just log for now
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "OVO Waitlist <onboarding@resend.dev>",
        to: "sgeolynx@gmail.com",
        subject: "New OVO Waitlist Signup",
        text: `New waitlist signup: ${email}`,
      });
    } else {
      console.log("No RESEND_API_KEY found. Logging signup:", email);
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to join waitlist:", error);
    return { error: "Something went wrong. Please try again later." };
  }
}
