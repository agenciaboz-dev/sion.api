import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

const transporter = nodemailer.createTransport({
    host: "mail.cooperativasion.com.br",
    port: 25,
    secure: false,
    auth: {
        user: "noreply@cooperativasion.com.br",
        pass: ",2Fc2K[TXT?C",
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
    },
})

export const sendMail = (destination: string, subject: string, text?: string, html?: string) => {
    const mailOptions: Mail.Options = {
        from: "Cooperativa Sion - <noreply@cooperativasion.com.br>",
        to: destination,
        subject,
        html,
        text,
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) console.log(error)
        console.log(info)
    })
}
