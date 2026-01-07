"use server";

import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  console.error("RESEND_API_KEY is not set in environment variables");
}

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function sendInquiry(formData: any) {
  const { name, email, phone, sessionType, location, message } = formData;

  if (!resend) {
    console.error("Resend API key is not configured");
    return { 
      success: false, 
      error: "Email service is not configured. Please contact carlygagephotography@gmail.com directly." 
    };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Carly Gage Photography <hello@carlygage.com>', // Verified domain
      to: ['carlygagephotography@gmail.com'],
      subject: `New Family Session Inquiry: ${name}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">New Session Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Session Type:</strong> ${sessionType}</p>
          <p><strong>Location:</strong> ${location}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error };
    }

    return { success: true };
  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, error };
  }
}

