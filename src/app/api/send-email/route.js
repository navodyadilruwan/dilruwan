// src/app/api/send-email/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "navodyadilruwan220@gmail.com",
    pass: process.env.GMAIL_APP_PASSWORD, // This comes from .env.local
  },
});

export async function POST(request) {
  try {
    const { subject, email, message } = await request.json();

    if (!subject || !email || !message) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    await transporter.sendMail({
      from: `"Portfolio" <${email}>`,
      to: "navodyadilruwan220@gmail.com",
      replyTo: email,
      subject: `Portfolio: ${subject}`,
      text: message,
      html: `
        <div style="font-family: Arial; padding: 20px; background: #0f172a; color: white; border-radius: 10px;">
          <h2 style="color: #06b6d4;">New Message from Portfolio</h2>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>From:</strong> ${email}</p>
          <hr style="border: 1px solid #06b6d4;">
          <p style="background: #1e293b; padding: 15px; border-radius: 8px;">${message.replace(
            /\n/g,
            "<br>"
          )}</p>
          <br>
          <small style="color: #94a3b8;">Sent from navodyadilruwan.com</small>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: "Sent!" });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
