import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { whatsapp, whatsappQrCode } from "./whatsapp"
const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (request: Request, response: Response) => {
    const settings = await prisma.settings.findFirst()
    response.json(settings)
})

router.post("/rate", async (request: Request, response: Response) => {
    const data = request.body

    const settings = await prisma.settings.update({ data: { rate: Number(data.rate) }, where: { id: 1 } })
    response.json(settings)
})

router.get("/whatsapp", async (request: Request, response: Response) => {
    const status = whatsapp.getState()
    const qrcode = whatsappQrCode
    response.json({ status, qrcode })
})

export default router
