import { PDFDocument } from "pdf-lib"
import fontkit from "@pdf-lib/fontkit"
import path from "path"
import fs from "fs"

const updateImage = async (options: UpdateImageOptions) => {
    const pdfBuffer = await fs.promises.readFile(options.pdfPath)
    const pdfDoc = await PDFDocument.load(pdfBuffer)
    const form = pdfDoc.getForm()
    if (options.base64 || options.image) {
        const imageBytes = fs.readFileSync(path.join(__dirname, `./${options.image}`))
        const image = await pdfDoc.embedPng(options.base64 || imageBytes)

        try {
            form.getButton(options.field).setImage(image)
            console.log("image updated")
        } catch (error) {
            console.log(error)
        }
    }

    // Save the modified PDF document to a file
    const modifiedPdf = await pdfDoc.save()
    await fs.promises.writeFile(options.outputPath, modifiedPdf)
}

const fillForm = async (options: FillFormOptions) => {
    // Load the PDF document
    const pdfBuffer = await fs.promises.readFile(options.pdfPath)
    const pdfDoc = await PDFDocument.load(pdfBuffer)
    pdfDoc.registerFontkit(fontkit)
    const fontRegularBytes = fs.readFileSync(path.join(__dirname, `./fonts/${options.font.regular}`))
    const fontBoldBytes = fs.readFileSync(path.join(__dirname, `./fonts/${options.font.bold}`))

    const customFontRegular = await pdfDoc.embedFont(fontRegularBytes)
    const customFontBold = await pdfDoc.embedFont(fontBoldBytes)

    const form = pdfDoc.getForm()

    // Get all fields in the PDF by their names
    options.fields.map((field) => {
        try {
            form.getTextField(field.name).setText(field.value.toString())
            form.getTextField(field.name).updateAppearances(field.bold ? customFontBold : customFontRegular)
        } catch {}
    })

    // Save the modified PDF document to a file
    const modifiedPdf = await pdfDoc.save()
    await fs.promises.writeFile(options.outputPath, modifiedPdf)

    form.flatten()
    const flattenedPdf = await pdfDoc.save()
    const flattenedSplited = options.outputPath.split(".pdf")
    await fs.promises.writeFile(`${flattenedSplited[0]}.flattened.pdf`, flattenedPdf)
}

const pdf = {
    fillForm,
    updateImage,
}

module.exports = pdf
