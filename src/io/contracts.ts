import { contracts } from "@prisma/client"
import { Socket } from "socket.io"
import log from "./log"

interface ContractBag {
    user_id: number
    contract: contracts
}

export const handleContracts = (socket: Socket) => {
    socket.on("contract:new", (data: ContractBag) => {
        const { contract, user_id } = data
        socket.broadcast.emit("contract:new", contract)
        log(`Contrato ${contract.name} criado`, user_id)
    })

    socket.on("contract:update", (data: ContractBag) => {
        const { contract, user_id } = data
        socket.broadcast.emit("contract:update", contract)
        log(`Contrato ${contract.name} atualizado`, user_id)
    })

    socket.on("contract:remove", (data: ContractBag) => {
        const { contract, user_id } = data
        socket.broadcast.emit("contract:remove", contract)
        log(`Contrato ${contract.name} removido`, user_id)
    })
}
