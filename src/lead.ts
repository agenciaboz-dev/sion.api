import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { sendMail } from "./scripts/mail"
import { getNumbers } from "./send_whatsapp"
import { whatsapp } from "./whatsapp"
import whatsapp_templates from "./templates/whatsapp_templates"
const router = express.Router()
const prisma = new PrismaClient()

router.post("/", async (request: Request, response: Response) => {
    const data: { name: string; phone: string; mail: string; message: string } = request.body
    const [number, number2] = getNumbers(data.phone)

    const html = `
    <div>
        <p>Nome: ${data.name}<p>
        <p>Telefone: ${data.phone}<p>
        <p>E-mail: ${data.mail}<p>
        <p>Mensagem: ${data.message}<p>
    </div>
    `

    const message = await whatsapp.sendMessage(number, whatsapp_templates.contato(data.phone, data.mail, data.name, data.message))
    const message2 = await whatsapp.sendMessage(number2, whatsapp_templates.contato(data.phone, data.mail, data.name, data.message))
    const mail = await sendMail("cooperativa@sionenergia.com.br", "Novo contato pelo site", JSON.stringify(data, null, 4), html)
    response.json(mail)
})

export default router
