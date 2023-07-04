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

router.post("/status/update", async (request: Request, response: Response) => {
    const data = request.body

    const status = await prisma.contractStatus.update({
        where: { id: data.id },
        data: { name: data.name },
    })

    response.json(status)
})

router.post("/status/delete", async (request: Request, response: Response) => {
    const data = request.body

    const status = await prisma.contractStatus.delete({
        where: { id: data.id },
    })

    response.json(status)
})

router.post("/update", async (request: Request, response: Response) => {
    const data = request.body

    const board = await prisma.boards.update({
        where: { id: data.id },
        data: {
            name: data.name,
            access: data.access,
            columns: data.columns,
        },
    })

    response.json(board)
})

router.post("/delete", async (request: Request, response: Response) => {
    const data = request.body

    const board = await prisma.boards.delete({
        where: { id: data.id },
    })

    response.json(board)
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
