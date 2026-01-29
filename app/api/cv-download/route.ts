import { NextResponse } from "next/server"

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

    // Send notification via email using fetch to an email API
    // Using EmailJS or similar service - for now we'll use a webhook
    try {
      // Attempt to send via a simple webhook/email service
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_KEY || "YOUR_ACCESS_KEY",
          subject: `CV Download Request from ${name || email}`,
          from_name: "Kevzo8 Portfolio",
          to: notificationEmail,
          message: `
Someone requested to download your CV!

Name: ${name || "Not provided"}
Email: ${email}
Time: ${timestamp}

This person may be interested in your work or services.
          `,
          email: email,
        }),
      })
    } catch (emailError) {
      console.error("Email notification failed:", emailError)
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
