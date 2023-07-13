import { PrismaClient, users } from "@prisma/client"
import { Socket } from "socket.io"

const prisma = new PrismaClient()

export const handleUsers = (socket: Socket) => {
    socket.on("user:new", (user: users) => {
        console.log(user)
        socket.broadcast.emit("user:new", user)
    })

    socket.on("user:update", async (data: { user: users; seller: users }) => {
        const user = data.user
        const seller = data.seller

        socket.broadcast.emit("user:update", seller)

        await prisma.userLogs.create({
            data: {
                date: new Date(),
                text: `Usuário ${seller.name} atualizado`,
                user_id: user.id,
            },
        })
    })

    socket.on("user:remove", (user: users) => {
        console.log(user)
        socket.broadcast.emit("user:remove", user)
    })
}
