import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { whatsapp } from "./whatsapp"
import templates from "./templates/whatsapp_templates"
const router = express.Router()
const prisma = new PrismaClient()

router.post("/token", async (request: Request, response: Response) => {
    const data = request.body
    const number = `55${data.number}@c.us`

    const prefix = number.slice(2, 4)
    const number2 = `55${prefix + number.slice(5)}`

    const message = await whatsapp.sendMessage(number, templates.token(data.token, data.name, data.limit))
    const message2 = await whatsapp.sendMessage(number2, templates.token(data.token, data.name, data.limit))
    console.log(message)
    console.log(message2)
    response.json({ number1: message.body, number2: message2.body })
})

export default router
