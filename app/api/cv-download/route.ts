import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email, name } = await request.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    // Send notification email to Kevin
    const notificationEmail = "cmsckvz@gmail.com"
    
    // Using Resend or a simple email service
    // For now, we'll use a webhook approach with a free service
    const timestamp = new Date().toLocaleString("en-PH", { timeZone: "Asia/Manila" })
    
    // Log the download request (in production, you'd send an actual email)
    console.log(`[CV Download Request] Name: ${name || "Not provided"}, Email: ${email}, Time: ${timestamp}`)

    // Send notification via email using Resend
    try {
      await resend.emails.send({
        from: "CV Download <onboarding@resend.dev>",
        to: notificationEmail,
        subject: `CV Download Request from ${name || email}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">CV Download Notification</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
              <p><strong>Name:</strong> ${name || "Not provided"}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Time:</strong> ${timestamp}</p>
            </div>
            <p style="color: #888; font-size: 12px; margin-top: 20px;">
              Someone has downloaded your CV from your portfolio.
            </p>
          </div>
        `,
      })
      console.log("[CV Download Email Sent Successfully]", { name, email })
    } catch (emailError) {
      console.error("[CV Download Email Error]", emailError)
      // Continue anyway - don't block the download
    }

    // Return success with download URL
    return NextResponse.json({ 
      success: true, 
      message: "Access granted! You can now download the CV.",
      downloadUrl: "/Kevin_Vega_CV.pdf"
    })
  } catch (error) {
    console.error("CV download error:", error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
