import { contracts, users } from "@prisma/client"

const token = (token: number | string, name: string, limit: string) =>
    `TOKEN: ${token}\n*Token de verificação de assinatura*\n\nUtilize o token enviado para confirmar sua assinatura. Por motivos de segurança, ele é válido apenas por 4 horas.\n\nEstará assinando como:\n${name}\n\nData limite de assinatura:\n${limit}\n\n*Não compartilhe esta mensagem*\nPara sua segurança, não encaminhe este e-mail para ninguém.`

const confirmacao = (contract: contracts, seller: users, signing: string) =>
    `Sua assinatura foi confirmada. Obrigado!\n\n${contract.cnpj ? `Razão Social: ${contract.company}\n` : ""}Nome do Responsável: ${
        contract.name
    }\nTelefone: ${contract.phone}\nE-mail:${contract.email}\nVendedor: ${seller.name}\n\n*Assinando como:*\n${signing}`

const assine = (signing: string, datelimit: string, link: string) =>
    `*Solicitação de Assinatura da Cooperativa Sion*\n\nClique no link abaixo para visualizar o contrato\n\n${link}\n\nEstará assinando como:\n${signing}\n\nData limite de assinatura:\n${datelimit}\n\n*Não compartilhe esta mensagem*\nPara sua segurança, não encaminhe este e-mail para ninguém.`

const cadastrado = (contract: contracts, seller: users) =>
    `*Uma nova oportunidade foi cadastrada!*\n\n${contract.cnpj ? `Razão Social: ${contract.company}\n` : ""}Nome do Responsável: ${
        contract.name
    }\nTelefone: ${contract.phone}\nE-mail:${contract.email}\nVendedor: ${seller.name}`

const contato = (phone: number | string, email: string, name: string, message: string) =>
    `Olá ${name},\n\nAgradecemos por entrar em contato conosco por meio do formulário em nosso site. Estamos felizes em receber sua mensagem e gostaríamos de responder prontamente às suas perguntas e necessidades.\n\n*Detalhes da Mensagem*\n\nNome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem\n${message}\n\nEntraremos em contato com você o mais breve possível para fornecer as informações que você solicitou ou para discutir os detalhes mais aprofundados de sua mensagem. Sua opinião é importante para nós e estamos ansiosos para ajudá-lo da melhor maneira possível.\n\nAgradecemos novamente por se comunicar conosco e por considerar nossos serviços. Tenha um ótimo dia!`

export default { token, confirmacao, assine, contato, cadastrado }
