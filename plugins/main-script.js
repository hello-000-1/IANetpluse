const handler = async (m, { conn }) => {
  const texto = `
🤖 _*ⓘ𝘕𝘦𝘵𝘗𝘭𝘶𝘴𝘦*_ 👑

\`\`\`Repositorio OFC:\`\`\`
https://github.com/hello-000-1/TIME 

> 🌟 Deja tu estrellita ayudaría mucho :D

🔗 *Grupo oficial del bot:* https://chat.whatsapp.com/LfeYIFkvzZtJ8hQCYwqI1W?mode=ac_t
  `.trim()

  await conn.reply(m.chat, texto, m)
}

handler.help = ['script']
handler.tags = ['info']
handler.command = ['script']

export default handler
