import express from "express"
import login from "./src/login"
import contract from "./src/contract"
import viacep from "./src/viacep"
import contracts from "./src/contracts"
import user from "./src/user"
import settings from "./src/settings"
import texts from "./src/texts"
import images from "./src/images"
import boards from "./src/boards"
import send_whatsapp from "./src/send_whatsapp"
import logs from "./src/logs"

export const router = express.Router()

router.get("/", (request, response: any) => {
    response.json({ success: true })
})

router.use("/login", login)
router.use("/user", user)
router.use("/contract", contract)
router.use("/contracts", contracts)
router.use("/settings", settings)
router.use("/texts", texts)
router.use("/images", images)
router.use("/images", images)
router.use("/whatsapp", send_whatsapp)
router.use("/boards", boards)
router.use("/logs", logs)

router.post("/cep", (request, response, next) => {
    const data = request.body

    viacep.search(data.cep.replace(/\D/g, ""), (address: any) => {
        response.json(address)
    })
})

// v1

router.use("/contract", contract)
