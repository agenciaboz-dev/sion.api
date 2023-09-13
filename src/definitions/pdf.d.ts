declare interface UpdateImageOptions {
    pdfPath: string
    outputPath: string
    field: string
    image?: string
    base64?: string
}

declare interface FillFormOptions {
    pdfPath: string
    outputPath: string

    font: {
        regular: string
        bold: string
    }

    fields: {
        name: string
        value: string
        bold?: boolean
    }[]
}
