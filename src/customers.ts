import express, { Express, Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { saveImage } from "./saveImage"
import fileUpload from "express-fileupload"

const router = express.Router()
const prisma = new PrismaClient()

router.get("/", async (request: Request, response: Response) => {
    const customers = await prisma.customers.findMany()
    response.status(200).json(customers)
})

router.post("/", async (request: Request, response: Response) => {
    const data = request.body as customerForm
    console.log(data)

    try {
        const customer = await prisma.customers.create({ data: { image: data.image } })
        response.status(200).json(customer)
    } catch (error) {
        console.log(error)
        response.status(500).json({ error: `Erro no formato dos dados enviados. Detalhes: ${error?.toString()}` })
    }
})

router.patch("/", async (request: Request, response: Response) => {
    let url: string | undefined = ""
    let id = 0

    if (request.files) {
        const data = JSON.parse(request.body.data) as { id: number }
        console.log(data)
        const file = request.files.file as fileUpload.UploadedFile
        url = saveImage(`customers/${data.id}`, file.data, file.name)
        id = data.id
    } else {
        const data = request.body as Partial<customerForm> & { id: number }
        url = data.image
        id = data.id
    }

    try {
        const customer = await prisma.customers.update({ data: { image: url }, where: { id } })
        response.status(200).json(customer)
    } catch (error) {
        console.log(error)
        response.status(500).json({ error: `Erro no formato dos dados enviados ou na validade do ID. Detalhes: ${error?.toString()}` })
    }
})

router.delete("/", async (request: Request, response: Response) => {
    const data = request.body as { id: number }

    try {
        const customer = await prisma.customers.delete({ where: { id: data.id } })
        response.status(200).json(customer)
    } catch (error) {
        console.log(error)
        response.status(500).json({ error: `Não foi encontrado cliente com o ID enviado: ${data.id}. Detalhes: ${error?.toString()}` })
    }
})

export default router
