import { users } from "@prisma/client"
import { Socket } from "socket.io"

export const handleUsers = (socket: Socket) => {
    socket.on("user:new", (user: users) => {
        console.log(user)
        socket.broadcast.emit("user:new", user)
    })

    socket.on("user:update", (user: users) => {
        console.log(user)
        socket.broadcast.emit("user:update", user)
    })

    socket.on("user:remove", (user: users) => {
        console.log(user)
        socket.broadcast.emit("user:remove", user)
    })
}
