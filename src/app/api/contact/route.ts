import { NextRequest, NextResponse } from "next/server";
import { portfolioData } from "@/data/portfolio";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Server-side validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Please provide a subject line." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "Please provide a message with at least 10 characters." },
        { status: 400 }
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();
    const submittedAt = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const gmailUser = process.env.GMAIL_USER || portfolioData.personal.email;
    const gmailAppPassword = (process.env.GMAIL_APP_PASSWORD || "abxlzrhwxsuqpfbz").replace(/\s+/g, "");
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || gmailUser;

    // Create Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    // Email HTML template for Manish
    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #08090d; color: #f1f5f9; padding: 24px; margin: 0; }
            .card { max-width: 600px; margin: 0 auto; background: #13151f; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
            .header { background: linear-gradient(135deg, #0284c7 0%, #6366f1 100%); padding: 24px 30px; text-align: left; }
            .header h1 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 700; letter-spacing: -0.5px; }
            .header p { margin: 4px 0 0; color: rgba(255,255,255,0.85); font-size: 13px; }
            .content { padding: 30px; }
            .field { margin-bottom: 20px; }
            .label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #94a3b8; font-weight: 600; margin-bottom: 6px; }
            .value { font-size: 15px; color: #f8fafc; font-weight: 500; background: #0c0d14; padding: 12px 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); }
            .message-box { background: #0c0d14; padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; }
            .footer { padding: 20px 30px; background: #0c0d14; border-top: 1px solid rgba(255,255,255,0.06); font-size: 12px; color: #64748b; text-align: center; }
            .reply-btn { display: inline-block; background: #38bdf8; color: #08090d; font-weight: 600; font-size: 13px; padding: 10px 20px; border-radius: 8px; text-decoration: none; margin-top: 12px; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>⚡ New Portfolio Contact Message</h1>
              <p>Received from ${cleanName} via manishkumar.dev</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Sender Name</div>
                <div class="value">${cleanName}</div>
              </div>
              <div class="field">
                <div class="label">Sender Email</div>
                <div class="value"><a href="mailto:${cleanEmail}" style="color: #38bdf8; text-decoration: none;">${cleanEmail}</a></div>
              </div>
              <div class="field">
                <div class="label">Subject</div>
                <div class="value">${cleanSubject}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">${cleanMessage}</div>
              </div>
              <div style="text-align: center; margin-top: 24px;">
                <a href="mailto:${cleanEmail}?subject=Re: ${encodeURIComponent(cleanSubject)}" class="reply-btn">Reply to ${cleanName}</a>
              </div>
            </div>
            <div class="footer">
              Sent on ${submittedAt} (IST) • Portfolio Contact Service
            </div>
          </div>
        </body>
      </html>
    `;

    // Mail options
    const mailOptions = {
      from: `"Portfolio Contact - ${cleanName}" <${gmailUser}>`,
      to: receiverEmail,
      replyTo: cleanEmail,
      subject: `[Portfolio Inquiry] ${cleanSubject} — from ${cleanName}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\nDate: ${submittedAt}\n\nMessage:\n${cleanMessage}`,
      html: htmlContent,
    };

    // Send the email via Gmail SMTP
    await transporter.sendMail(mailOptions);

    console.log(`[SMTP SUCCESS] Contact form email from ${cleanEmail} sent successfully to ${receiverEmail}`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been sent directly to Manish's inbox. He will get back to you shortly.",
        timestamp: new Date().toISOString(),
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[SMTP ERROR] Failed to send contact email via Gmail:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          error?.message && error.message.includes("Invalid login")
            ? "Authentication error with mail service. Please reach out via email directly."
            : "An unexpected error occurred while transmitting your message. Please reach out to Manish via email directly.",
      },
      { status: 500 }
    );
  }
}
