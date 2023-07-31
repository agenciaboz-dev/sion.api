import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { sendMail } from "./scripts/mail"
const router = express.Router()
const prisma = new PrismaClient()

router.post("/", async (request: Request, response: Response) => {
    const data: { name: string; phone: string; mail: string; message: string } = request.body

    const html = `
    <div>
        <p>Nome: ${data.name}<p>
        <p>Telefone: ${data.phone}<p>
        <p>E-mail: ${data.mail}<p>
        <p>Mensagem: ${data.message}<p>
    </div>
    `

    sendMail("fernando@agenciaboz.com.br", "Lead Sion", JSON.stringify(data, null, 4), html)
})

export default router
