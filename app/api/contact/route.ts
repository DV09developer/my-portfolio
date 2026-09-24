import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const name = typeof body.name === "string" ? body.name.trim() : ""
    const email = typeof body.email === "string" ? body.email.trim() : ""
    const message =
      typeof body.message === "string" ? body.message.trim() : ""

    // Honeypot field for basic spam protection
    const website =
      typeof body.website === "string" ? body.website.trim() : ""

    // If honeypot is filled, silently reject the request
    if (website) {
      return NextResponse.json(
        { success: true },
        { status: 200 }
      )
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and message are required.",
        },
        { status: 400 }
      )
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      )
    }

    if (name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is too long.",
        },
        { status: 400 }
      )
    }

    if (message.length > 5000) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is too long.",
        },
        { status: 400 }
      )
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing")

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 }
      )
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error("CONTACT_EMAIL is missing")

      return NextResponse.json(
        {
          success: false,
          message: "Contact email is not configured.",
        },
        { status: 500 }
      )
    }

    if (!process.env.RESEND_FROM_EMAIL) {
      console.error("RESEND_FROM_EMAIL is missing")

      return NextResponse.json(
        {
          success: false,
          message: "Sender email is not configured.",
        },
        { status: 500 }
      )
    }

    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br />")

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `Portfolio Contact — ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Portfolio Contact</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
              font-family: Arial, Helvetica, sans-serif;
            "
          >
            <div
              style="
                max-width: 600px;
                margin: 40px auto;
                background: #ffffff;
                border: 1px solid #e5e5e5;
                border-radius: 12px;
                overflow: hidden;
              "
            >
              <div
                style="
                  padding: 24px;
                  background: #111111;
                  color: #ffffff;
                "
              >
                <h1
                  style="
                    margin: 0;
                    font-size: 22px;
                  "
                >
                  New Portfolio Message
                </h1>
              </div>

              <div style="padding: 24px;">
                <p style="margin-top: 0;">
                  You received a new message from your portfolio website.
                </p>

                <div style="margin-top: 24px;">
                  <strong>Name</strong>
                  <p>${safeName}</p>
                </div>

                <div style="margin-top: 20px;">
                  <strong>Email</strong>
                  <p>
                    <a href="mailto:${safeEmail}">
                      ${safeEmail}
                    </a>
                  </p>
                </div>

                <div style="margin-top: 20px;">
                  <strong>Message</strong>

                  <div
                    style="
                      margin-top: 8px;
                      padding: 16px;
                      background: #f7f7f7;
                      border-radius: 8px;
                      line-height: 1.6;
                    "
                  >
                    ${safeMessage}
                  </div>
                </div>
              </div>

              <div
                style="
                  padding: 16px 24px;
                  border-top: 1px solid #e5e5e5;
                  color: #777777;
                  font-size: 12px;
                "
              >
                Sent from your portfolio contact form.
              </div>
            </div>
          </body>
        </html>
      `,
    })

    if (error) {
      console.error("Resend error:", error)

      return NextResponse.json(
        {
          success: false,
          message: "Failed to send your message. Please try again.",
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully.",
        id: data?.id,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact API error:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    )
  }
}