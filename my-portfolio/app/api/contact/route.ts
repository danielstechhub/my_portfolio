import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Lazy instantiation prevents build-time missing API key crashes
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured in environment variables.');
  }
  return new Resend(apiKey);
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, service, budget, message } = body;

    // Strict Server-Side Validation
    if (!name?.trim() || !email?.trim() || !message?.trim() || !budget?.trim()) {
      return NextResponse.json(
        { error: 'All fields (Name, Email, Service, Budget, and Scope) are required.' },
        { status: 400 }
      );
    }

    // Email format sanity check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    const resend = getResendClient();
    const recipient = process.env.CONTACT_NOTIFICATION_EMAIL || 'hello@lumynex.com';

    // Dispatch notification email
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Inquiry <onboarding@resend.dev>', // Replace with your domain once verified on Resend
      to: [recipient],
      replyTo: email,
      subject: `⚡ New Project Inquiry: ${service} (${budget})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #272a34; border-radius: 8px; background-color: #0d0e12; color: #f3f4f6;">
          <h2 style="color: #d4af37; border-bottom: 1px solid #272a34; padding-bottom: 12px; margin-top: 0;">New Scope Submission</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #9ca3af; width: 140px;">Client Name:</td>
              <td style="padding: 8px 0; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Client Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #f3c623;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Selected Service:</td>
              <td style="padding: 8px 0;">${service}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9ca3af;">Estimated Budget:</td>
              <td style="padding: 8px 0; font-weight: 600; color: #f3c623;">${budget}</td>
            </tr>
          </table>

          <div style="background-color: #16181f; padding: 16px; border-radius: 6px; border: 1px solid #272a34;">
            <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; color: #9ca3af;">Project Scope Details:</p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #d1d5db;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend Delivery Error:', error);
      return NextResponse.json(
        { error: `Email dispatch failed: ${error.message}` },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, id: data?.id, message: 'Inquiry dispatched successfully.' },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'An unexpected backend error occurred.';
    console.error('API Route Error:', err);
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}