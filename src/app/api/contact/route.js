import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message, budget } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return Response.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email to the company
    const companyEmail = {
      to: "anas@vexa.ae",
      from: "anas@vexa.ae",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Budget:</strong> ${
        budget
          ? `$${budget}K${
              budget === "150" ? "+" : ""
            }`
          : "N/A"
      }</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    // Confirmation email to user
    const userEmail = {
      to: email,
      from: "anas@vexa.ae",
      subject: "We received your message - Vexa",
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Hi ${name},</p>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Vexa Team</p>
      `,
    };

    // Send both emails
    await sgMail.send(companyEmail);
    await sgMail.send(userEmail);

    return Response.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error.message || error);
    console.error("Full error:", error);
    return Response.json(
      { error: error.message || "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
