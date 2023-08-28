import { Socket } from "socket.io"
import { handleBoards } from "./boards"
import { handleUsers } from "./users"
import { handleStatuses } from "./statuses"
import { handleContracts } from "./contracts"
import { Server as SocketIoServer } from "socket.io"
import { Server as HttpServer } from "http"
import { Server as HttpsServer } from "https"

let io: SocketIoServer | null = null
export const initializeIoServer = (server: HttpServer | HttpsServer) => {
    io = new SocketIoServer(server, { cors: { origin: "*" }, maxHttpBufferSize: 1e8 })
}

export const getIoInstance = () => {
    if (!io) {
        throw new Error("Socket.IO has not been initialized. Please call initializeIoServer first.")
    }
    return io
}

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
