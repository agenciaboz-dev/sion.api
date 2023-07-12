import { Socket } from "socket.io"
import { handleBoards } from "./boards"
import { handleUsers } from "./users"
import { handleStatuses } from "./statuses"
import { handleContracts } from "./contracts"

export const handleSocket = (socket: Socket) => {
    console.log(`new connection: ${socket.id}`)

    socket.on("disconnect", () => {
        console.log(`disconnected: ${socket.id}`)
    })

    handleBoards(socket)
    handleUsers(socket)
    handleStatuses(socket)
    handleContracts(socket)
}
