import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (request: Request, response: Response) => {
    const users = await prisma.users.findMany({ include: { contracts: true } })
    response.json(users)
})

router.post("/id", async (request: Request, response: Response) => {
    const data = request.body
    const user = await prisma.users.findUnique({
        where: { id: Number(data.id) },
        include: { contracts: { include: { seller: true } } },
    })

    response.json(user)
})

router.post("/update", async (request: Request, response: Response) => {
    const data = request.body

    const user = await prisma.users.update({
        data: {
            name: data.name,
            phone: data.phone,
            address: data.address,
            birth: data.birth,
            cep: data.cep,
            cpf: data.cpf,
            district: data.district,
            email: data.email,
            number: data.number,
            role: data.role,
        },
        where: { id: data.id },
        include: { contracts: { include: { seller: true } } },
    })

    response.json(user)
})

router.post("/password", async (request: Request, response: Response) => {
    const data = request.body

    const user = await prisma.users.update({
        data: { password: data.password },
        where: { id: data.id },
        include: { contracts: { include: { seller: true } } },
    })

    response.json(user)
})

router.post("/email", async (request: Request, response: Response) => {
    const data = request.body

    const user = await prisma.users.update({
        data: { email: data.email },
        where: { id: data.id },
        include: { contracts: { include: { seller: true } } },
    })

    response.json(user)
})

router.post("/delete", async (request: Request, response: Response) => {
    const data = request.body

    const contracts = await prisma.contracts.updateMany({ where: { seller_id: data.id }, data: { seller_id: 2 } })
    const user = await prisma.users.delete({ where: { id: data.id } })
    response.json(user)
})

router.post("/new", async (request: Request, response: Response) => {
    const data = request.body

    const user = await prisma.users.create({
        data: {
            birth: new Date(data.birth),
            email: data.email,
            name: data.name,
            password: data.password,
            username: data.username,
            address: data.address,
            cep: data.cep,
            cpf: data.cpf,
            district: data.district,
            number: data.number,
            phone: data.phone,
            rg: data.rg,
        },
    })

    response.json(user)
})

router.post("/search", async (request: Request, response: Response) => {
    const data = request.body

    const contracts = await prisma.users.findMany({
        where: { name: { contains: data.search.trim() } },
        include: { contracts: { include: { seller: true } } },
    })

    response.json(contracts)
})

export default router
