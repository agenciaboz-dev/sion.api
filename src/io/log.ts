import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const log = async (text: string, id: number) => {
    try {
        await prisma.userLogs.create({
            data: {
                date: new Date(),
                text: text,
                user_id: id,
            },
        })
    } catch {
        console.log(`error creating log with data: ${{ text, id }}`)
    }
}

export default log
