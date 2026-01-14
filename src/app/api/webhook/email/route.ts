import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const event = await req.json();

    // Log the event to help with debugging if needed
    console.log('Resend Webhook Received:', event.type);

    if (event.type === 'email.received') {
      const emailId = event.data.email_id;

      // 1. Fetch the full email content from Resend
      const { data: emailContent, error: fetchError } = await resend.emails.get(emailId);

      if (fetchError || !emailContent) {
        console.error('Error fetching email content:', fetchError);
        return NextResponse.json({ error: 'Failed to fetch email content' }, { status: 500 });
      }

      // 2. Forward the email to your primary Gmail
      // Note: The 'from' address MUST be a verified domain in your Resend account.
      const { data: forwardData, error: forwardError } = await resend.emails.send({
        from: 'Carly Gage Photography <hello@carlygage.com>',
        to: ['carlygagephotography@gmail.com'],
        subject: `[Fwd] ${emailContent.subject || 'No Subject'}`,
        replyTo: emailContent.from, // So you can reply directly to the original sender
        html: `
          <div style="font-family: sans-serif; border-bottom: 2px solid #eee; padding-bottom: 20px; margin-bottom: 20px; color: #666;">
            <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #999;">Forwarded from carlygage.com</p>
            <p><strong>From:</strong> ${emailContent.from}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Subject:</strong> ${emailContent.subject}</p>
          </div>
          <div>
            ${emailContent.html || `<pre>${emailContent.text}</pre>`}
          </div>
        `,
      });

      if (forwardError) {
        console.error('Error forwarding email:', forwardError);
        return NextResponse.json({ error: 'Failed to forward email' }, { status: 500 });
      }

      console.log('✅ Email forwarded successfully:', forwardData?.id);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Webhook Error:', err.message);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
