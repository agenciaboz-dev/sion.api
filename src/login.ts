import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
const router = express.Router()
const prisma = new PrismaClient()

router.post("/", async (request: Request, response: Response) => {
    const data = request.body
    console.log(data)

    const user = await prisma.users.findFirst({
        where: {
            OR: [{ username: data.user }, { email: data.user }],
            AND: {
                password: data.password,
            },
        },
        include: { contracts: { where: { deleted: false } } },
    })

    response.json(user)
})

export default router
