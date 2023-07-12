import qrcode from "qrcode-terminal"
import { Client, LocalAuth } from "whatsapp-web.js"

export let whatsappQrCode = ""

export const whatsapp = new Client({
    authStrategy: new LocalAuth({ dataPath: "whatsapp.auth" }),
    puppeteer: {
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
})

whatsapp.on("qr", (qr) => {
    whatsappQrCode = qr
    // qrcode.generate(qr, { small: true })
})

whatsapp.on("ready", () => {
    console.log("whatsapp client is ready")
})
