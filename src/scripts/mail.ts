import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

const transporter = nodemailer.createTransport({
    host: "mail.cooperativasion.com.br",
    port: 25,
    secure: false,
    auth: {
        user: "adesao@cooperativasion.com.br",
        pass: "kfxWy4L6s2ieXjt",
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
    },
})

export const sendMail = async (destination: string, subject: string, text?: string, html?: string) => {
    const mailOptions: Mail.Options = {
        from: "Cooperativa Sion <adesao@cooperativasion.com.br>",
        to: destination,
        subject,
        html,
        text,
    }

    const response = await transporter.sendMail(mailOptions)
    return response
}
