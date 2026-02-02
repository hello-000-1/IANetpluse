import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  const namegrupo = 'Grupo Oficial'
  const gp1 = 'https://chat.whatsapp.com/FDyllRxIreCGDX8pxY9Xyn?mode=gi_t'

  const namechannel = 'Canal del Bot'
  const channel = 'https://whatsapp.com/channel/0029VbBcXc8Chq6GmExvhU1l'

  const dev = '👾 Desarrollador: ELVIS'
  const catalogo = 'https://qu.ax/TJRoN.jpg'
  const emojis = '📡'

  let grupos = `
╭─⟪ *🌐 GRUPOS OFICIALES* ⟫
│
│ ⚔️ *${namegrupo}*
│ ${gp1}
│
│ ⚡ *${namechannel}*
│ ${channel}
│
│ ${dev}
╰─────────────────╯
`

  await conn.sendMessage(m.chat, {
    image: { url: catalogo },
    caption: grupos.trim()
  }, { quoted: m })

  await m.react(emojis)
}

handler.help = ['grupos']
handler.tags = ['info']
handler.command = ['grupos', 'links', 'groups']

export default handler