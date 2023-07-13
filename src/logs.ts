import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (request: Request, response: Response) => {
    const logs = await prisma.userLogs.findMany({ include: { user: true } })
    response.json(logs)
})

export default router
