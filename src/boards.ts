import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (request: Request, response: Response) => {
    const boards = await prisma.boards.findMany()
    response.json(boards)
})

router.post("/status", async (request: Request, response: Response) => {
    const data = request.body

    const status = await prisma.contractStatus.create({
        data: {
            name: data.name,
        },
    })

    response.json(status)
})

router.post("/new", async (request: Request, response: Response) => {
    const data = request.body

    const board = await prisma.boards.create({
        data: {
            name: data.name,
            access: data.access,
            columns: data.columns,
        },
    })

    response.json(board)
})

export default router
