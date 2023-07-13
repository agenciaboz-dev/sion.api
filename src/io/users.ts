import { users } from "@prisma/client"
import { Socket } from "socket.io"
import log from "./log"

interface UserBag {
    user_id: number
    seller: users
}

export const handleUsers = (socket: Socket) => {
    socket.on("user:new", async (data: UserBag) => {
        const { user_id, seller } = data
        socket.broadcast.emit("user:new", seller)
        log(`Usuário ${seller.username} criado`, user_id)
    })

    socket.on("user:update", async (data: UserBag) => {
        const { user_id, seller } = data
        socket.broadcast.emit("user:update", seller)
        log(`Usuário ${seller.username} atualizado`, user_id)
    })

    socket.on("user:remove", async (data: UserBag) => {
        const { user_id, seller } = data
        socket.broadcast.emit("user:remove", seller)
        log(`Usuário ${seller.username} deletado`, user_id)
    })
}
