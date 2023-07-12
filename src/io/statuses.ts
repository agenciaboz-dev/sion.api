import { contractStatus as Status } from "@prisma/client"
import { Socket } from "socket.io"

export const handleStatuses = (socket: Socket) => {
    socket.on("status:new", (status: Status) => {
        console.log(status)
        socket.broadcast.emit("status:new", status)
    })

    socket.on("status:update", (status: Status) => {
        console.log(status)
        socket.broadcast.emit("status:update", status)
    })

    socket.on("status:remove", (status: Status) => {
        console.log(status)
        socket.broadcast.emit("status:remove", status)
    })
}
