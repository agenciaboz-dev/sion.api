import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (request: Request, response: Response) => {
    const contracts = await prisma.contracts.findMany({ include: { seller: true, status: true } })
    response.json(contracts)
})

router.post("/id", async (request: Request, response: Response) => {
    const data = request.body
    const contract = await prisma.contracts.findUnique({
        where: { id: Number(data.id) },
        include: { seller: true, status: true },
    })

    response.json(contract)
})

router.post("/seller", async (request: Request, response: Response) => {
    const data = request.body
    const contracts = await prisma.contracts.findMany({
        where: { seller_id: Number(data.id) },
        include: { seller: true, status: true },
    })

    response.json(contracts)
})

router.post("/search", async (request: Request, response: Response) => {
    const data = request.body

    const contracts = await prisma.contracts.findMany({
        where: { name: { contains: data.search.trim() } },
        include: { seller: true, status: true },
    })

    response.json(contracts)
})

router.get("/status", async (request: Request, response: Response) => {
    const status = await prisma.contractStatus.findMany({ include: { contracts: true } })
    response.json(status)
})

router.post("/set_status", async (request: Request, response: Response) => {
    const data = request.body

    const contract = await prisma.contracts.update({
        where: { id: data.id },
        data: { statusId: data.status },
    })

    response.json(contract)
})

router.post("/archive", async (request: Request, response: Response) => {
    const data = request.body

    const contract = await prisma.contracts.update({
        where: { id: Number(data.id) },
        data: {
            archived: true,
        },
    })

    response.json(contract)
})

router.post("/unarchive", async (request: Request, response: Response) => {
    const data = request.body

    const contract = await prisma.contracts.update({
        where: { id: Number(data.id) },
        data: {
            archived: false,
        },
    })

    response.json(contract)
})

export default router
