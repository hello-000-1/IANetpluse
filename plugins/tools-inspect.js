import util from 'util'
import { format } from 'date-fns'

const handler = async (m, { conn }) => {
  try {
    if (!m.quoted) return m.reply('Debes responder a un mensaje para inspeccionarlo.')

    const quotedMessage = await m.getQuotedObj()
    if (!quotedMessage) return m.reply('No se pudo obtener la información del mensaje citado.')

    const messageDate = new Date(quotedMessage.timestamp * 1000)

    let messageInfo = `
╭━━━[ 🕵️‍♂️ *INSPECTOR DE MENSAJES* ]━━━╮
┃
┃ ≡ *ID del Mensaje:*
┃   ↳ ${quotedMessage.id || 'N/A'}
┃
┃ ≡ *Tipo de Mensaje:*
┃   ↳ ${quotedMessage.mtype || 'N/A'}
┃
┃ ≡ *Fecha y Hora:*
┃   ↳ ${format(messageDate, 'dd/MM/yyyy HH:mm:ss')}
┃
┃ ≡ *JID del remitente:*
┃   ↳ ${quotedMessage.sender}
┃
┃ ≡ *Enviado por mí:*
┃   ↳ ${quotedMessage.fromMe ? 'Sí' : 'No'}
┃
┃ ≡ *Es de un grupo:*
┃   ↳ ${quotedMessage.isGroup ? 'Sí' : 'No'}
┃
┃ ≡ *Mensaje reenviado:*
┃   ↳ ${quotedMessage.isForwarded ? `Sí (${quotedMessage.forwardingScore} veces)` : 'No'}
┃`

    if (quotedMessage.msg?.contextInfo?.forwardedNewsletterMessageInfo?.newsletterJid) {
      messageInfo += `
┃ ≡ *✨ JID DEL CANAL ENCONTRADO ✨*
┃   ↳ *${quotedMessage.msg.contextInfo.forwardedNewsletterMessageInfo.newsletterJid}*
┃`
    }

    messageInfo += `
┃ ≡ *Detalles completos (JSON):*
┃ \`\`\`${util.format(quotedMessage)}\`\`\`
┃
╰━━━━━━━━━━━━━━━━━━━━⬯
`
    await m.reply(messageInfo)
  } catch (error) {
    console.error(error)
    await m.reply('❌ Ocurrió un error al inspeccionar el mensaje. Por favor, inténtalo de nuevo.')
  }
}

handler.help = ['inspect']
handler.tags = ['tools']
handler.command = ['inspect', 'inspeccionar']

export default handler
