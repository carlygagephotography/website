"use server";

import { Resend } from 'resend';

export async function sendInquiry(formData: any) {
  const { name, email, phone, sessionType, location, message } = formData;
  
  const apiKey = process.env.RESEND_API_KEY;
  // Use the env var, or fallback to your specific ID
  const audienceId = process.env.RESEND_AUDIENCE_ID || "0850988a-a3b1-484b-8a71-0d1aae3f53b9";

  if (!apiKey) {
    console.error("❌ RESEND_API_KEY is missing");
    return { success: false, error: "Configuration error" };
  }

  if (!audienceId) {
    console.error("❌ RESEND_AUDIENCE_ID is missing");
    return { success: false, error: "Audience ID configuration error" };
  }

  console.log(`📧 Processing inquiry for ${email} - Audience ID: ${audienceId}`);

  const resend = new Resend(apiKey);

  try {
    // 1. Add to Resend Audience (Saves them as a CONTACT)
    // Note: Custom properties (phone, location, etc.) must be defined in Resend Dashboard first:
    // Go to Resend Dashboard > Audiences > Your Audience > Custom Properties > Add Property
    // Then you can uncomment the properties object below
    try {
      const nameParts = name.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

      // Try to create contact (without custom properties - they must be defined in Resend Audience first)
      // Note: To add custom properties later, define them in Resend Dashboard > Audience > Custom Properties
      const contactResult = await resend.contacts.create({
        email: email.trim().toLowerCase(),
        firstName: firstName,
        lastName: lastName,
        unsubscribed: false,
        audienceId: audienceId.trim()
        // Custom properties removed - add them in Resend Dashboard first if needed
        // properties: { phone, location, session_type, etc. }
      });

      if (contactResult.data) {
        console.log(`✅ Successfully added/updated ${email} in Resend Audience:`, contactResult.data);
      } else if (contactResult.error) {
        // If contact already exists, try to update it
        if (contactResult.error.message?.toLowerCase().includes('already exists') || 
            contactResult.error.message?.toLowerCase().includes('duplicate')) {
          console.log(`ℹ️ Contact ${email} already exists, updating properties...`);
          
          const updateResult = await resend.contacts.update({
            email: email.trim().toLowerCase(),
            audienceId: audienceId.trim(),
            firstName: firstName,
            lastName: lastName
            // Custom properties removed - add them in Resend Dashboard first if needed
          });
          
          if (updateResult.data) {
            console.log(`✅ Updated existing contact ${email} in Resend Audience`);
          } else {
            console.warn(`⚠️ Could not update contact ${email}:`, updateResult.error);
          }
        } else {
          console.error(`❌ Failed to add contact ${email}:`, contactResult.error);
        }
      }
    } catch (contactError: any) {
      // Log detailed error for debugging
      console.error("❌ Resend Audience Error:", {
        message: contactError?.message,
        statusCode: contactError?.statusCode,
        name: contactError?.name,
        error: JSON.stringify(contactError, null, 2),
        audienceId: audienceId
      });
      // Don't fail the entire form submission if contact creation fails
      // The email will still be sent
    }

    // 2. Send the notification email to you
    const { data, error } = await resend.emails.send({
      from: 'Carly Gage Photography <hello@carlygage.com>',
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
          <p><strong>Vision:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message}</p>
        </div>
      `,
    });

    if (error) return { success: false, error };
    return { success: true };
  } catch (error: any) {
    console.error("❌ Server Error:", error?.message || error);
    return { success: false, error };
  }
}
