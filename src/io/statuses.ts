import { contractStatus as Status, contractStatus } from "@prisma/client"
import { Socket } from "socket.io"
import log from "./log"

interface StatusBag {
    user_id: number
    status: contractStatus
}

export const handleStatuses = (socket: Socket) => {
    socket.on("status:new", (data: StatusBag) => {
        const { status, user_id } = data
        socket.broadcast.emit("status:new", status)
        log(`Status ${status.name} criado`, user_id)
    })

    socket.on("status:update", (data: StatusBag) => {
        const { status, user_id } = data
        socket.broadcast.emit("status:update", status)
        log(`Status ${status.name} atualizado`, user_id)
    })

    socket.on("status:remove", (data: StatusBag) => {
        const { status, user_id } = data
        socket.broadcast.emit("status:remove", status)
        log(`Status ${status.name} removido`, user_id)
    })
}
