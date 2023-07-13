import { boards } from "@prisma/client"
import { Socket } from "socket.io"
import log from "./log"

interface BoardBag {
    user_id: number
    board: boards
}

export const handleBoards = (socket: Socket) => {
    socket.on("board:new", (data: BoardBag) => {
        const { board, user_id } = data
        socket.broadcast.emit("board:new", board)
        log(`Quadro ${board.name} criado`, user_id)
    })

    socket.on("board:update", (data: BoardBag) => {
        const { board, user_id } = data
        socket.broadcast.emit("board:update", board)
        log(`Quadro ${board.name} atualizado`, user_id)
    })

    socket.on("board:remove", (data: BoardBag) => {
        const { board, user_id } = data
        socket.broadcast.emit("board:remove", board)
        log(`Quadro ${board.name} deletado`, user_id)
    })
}
