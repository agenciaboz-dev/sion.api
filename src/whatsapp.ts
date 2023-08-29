import qrcode from "qrcode-terminal"
import { Client, LocalAuth } from "whatsapp-web.js"
import { getIoInstance } from "./io/socket"

export let whatsappQrCode = ""

export const whatsapp = new Client({
    authStrategy: new LocalAuth({ dataPath: "whatsapp.auth" }),
    puppeteer: {
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
})

whatsapp.on("qr", (qr) => {
    whatsappQrCode = qr
    qrcode.generate(qr, { small: true })
    const io = getIoInstance()

    io.emit("zap:qrcode", qr)
})

whatsapp.on("ready", () => {
    const io = getIoInstance()
    console.log("whatsapp client is ready")

    io.emit("zap:ready", whatsapp.info)
})

whatsapp.on("auth_failure", (message) => {
    console.log(`fail: ${message}`)
})

whatsapp.on("disconnected", () => {
    const io = getIoInstance()
    whatsappQrCode = ""

    io.emit("zap:disconnected")
    whatsapp.initialize()
})
