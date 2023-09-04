import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { whatsapp } from "./whatsapp"
import templates from "./templates/whatsapp_templates"
import { sendMail } from "./scripts/mail"
import { confasn } from "./templates/email-confirmacao-assinatura"
import { email_confirmacao_assinatura } from "./templates/confirmacao-assinatura"
import { email_assinatura } from "./templates/assinatura"
import { email_token } from "./templates/token"
const router = express.Router()
const prisma = new PrismaClient()

export const getNumbers = (original_number: string | number) => {
    const number = `55${original_number}@c.us`

    const prefix = number.slice(2, 4)
    const number2 = `55${prefix + number.slice(5)}`
    return [number, number2]
}

router.post("/token", async (request: Request, response: Response) => {
    const data = request.body

    if (whatsapp.info) {
        const [number, number2] = getNumbers(data.number)

        const message = await whatsapp.sendMessage(number, templates.token(data.token, data.name, data.limit))
        const message2 = await whatsapp.sendMessage(number2, templates.token(data.token, data.name, data.limit))
        console.log(message)
        console.log(message2)

        response.json({ number1: message.body, number2: message2.body })
    }

    const signing =
        (await prisma.contracts.findFirst({ where: { phone: data.number }, orderBy: { id: "desc" } })) ||
        (await prisma.users.findFirst({ where: { phone: data.number } }))

    if (signing) {
        sendMail(
            signing.email,
            `TOKEN: ${data.token} - Token de verificação de assinatura`,
            `TOKEN: ${data.token} - Token de verificação de assinatura`,
            email_token(data.limit, signing.email, data.token)
        )
    }
})

router.post("/send", async (request: Request, response: Response) => {
    if (whatsapp.info) {
        const data = request.body
        const [number, number2] = getNumbers(data.number)

        const message = await whatsapp.sendMessage(number, data.message, { linkPreview: true })
        const message2 = await whatsapp.sendMessage(number2, data.message, { linkPreview: true })
        // const signing = await prisma.contracts.findFirst({where: {phone: data.number}, orderBy:{id:"desc"}}) || await prisma.users.findFirst({where: {phone: data.number}})

        response.json({ message, message2 })
    }
})

router.post("/signed", async (request: Request, response: Response) => {
    const data = request.body
    const contract = await prisma.contracts.findUnique({ where: { id: Number(data.id) }, include: { seller: true } })
    if (whatsapp.info) {
        const [number, number2] = getNumbers(data.number)

        console.log({ data, contract })

        if (contract) {
            const message = await whatsapp.sendMessage(number, templates.confirmacao(contract, contract.seller, data.signing))
            const message2 = await whatsapp.sendMessage(number2, templates.confirmacao(contract, contract.seller, data.signing))

            response.json({ message, message2 })
        } else {
            response.json({ error: "contract not found" })
        }
    }

    const signing =
        (await prisma.contracts.findFirst({ where: { phone: data.number }, orderBy: { id: "desc" } })) ||
        (await prisma.users.findFirst({ where: { phone: data.number } }))

    if (contract && signing)
        sendMail(
            signing.email,
            "Assinatura confirmada",
            "Olá! Sua assinatura foi confirmada.",
            email_confirmacao_assinatura(contract, contract.seller, signing.email)
        )
})

router.post("/contract", async (request: Request, response: Response) => {
    const data = request.body

    if (whatsapp.info) {
        const [number, number2] = getNumbers(data.number)

        const message = await whatsapp.sendMessage(number, templates.assine(data.signing, data.limit, data.link), { linkPreview: true })
        const message2 = await whatsapp.sendMessage(number2, templates.assine(data.signing, data.limit, data.link), { linkPreview: true })

        response.json({ message, message2 })
    }
    sendMail(data.signing, "contrato", "", email_assinatura(data.signing, data.limit, data.link))
})

router.post("/new", async (request: Request, response: Response) => {
    if (whatsapp.info) {
        const data = request.body

        const [number, number2] = getNumbers(data.number)

        const contract = await prisma.contracts.findUnique({ where: { id: Number(data.id) }, include: { seller: true } })

        if (contract) {
            const message = await whatsapp.sendMessage(number, templates.cadastrado(contract, contract.seller))
            const message2 = await whatsapp.sendMessage(number2, templates.cadastrado(contract, contract.seller))

            response.json({ message, message2 })
        } else {
            response.json({ error: "contract not found" })
        }
    }
})


export default router
