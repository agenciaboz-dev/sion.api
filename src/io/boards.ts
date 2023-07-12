import { boards } from "@prisma/client"
import { Socket } from "socket.io"

export const handleBoards = (socket: Socket) => {
    console.log(`new connection: ${socket.id}`)

    socket.on("board:new", (board: boards) => {
        console.log(board)
        socket.broadcast.emit("board:new", board)
    })

    socket.on("board:update", (board: boards) => {
        console.log(board)
        socket.broadcast.emit("board:update", board)
    })

    socket.on("board:remove", (board: boards) => {
        console.log(board)
        socket.broadcast.emit("board:remove", board)
    })

    socket.on("disconnect", () => {
        console.log(`disconnected: ${socket.id}`)
    })
}
