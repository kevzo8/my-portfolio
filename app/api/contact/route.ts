import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      )
    }

    const notificationEmail = "cmsckvz@gmail.com"
    const timestamp = new Date().toLocaleString("en-PH", { timeZone: "Asia/Manila" })

    try {
      // Send email notification using Resend
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: notificationEmail,
        subject: `New Contact Form Message from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Time:</strong> ${timestamp}</p>
              <p><strong>Message:</strong></p>
              <p style="white-space: pre-wrap; color: #555;">${message}</p>
            </div>
            <p style="color: #888; font-size: 12px; margin-top: 20px;">
              This message was sent from your portfolio contact form.
            </p>
          </div>
        `,
      })

      // Send confirmation email to the sender
      await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>",
        to: email,
        subject: "Message Received - Kevin Vega",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">Thank You!</h2>
            <p>Hi ${name},</p>
            <p>I've received your message and will get back to you as soon as possible.</p>
            <p style="margin-top: 30px;">Best regards,<br/><strong>Kevin Vega</strong></p>
          </div>
        `,
      })

      console.log("[Contact Form Email Sent Successfully]", { name, email })
    } catch (emailError) {
      console.error("[Contact Form Email Error]", emailError)
      // Continue anyway - the form submission is still valid
    }

    return NextResponse.json({ 
      success: true, 
      message: "Message sent successfully" 
    })

  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    )
  }
}
