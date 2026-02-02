const handler = async (m, { conn }) => {  

  const sections = [  
    {  
      title: '🎃 Menú list ♱',  
      rows: [  
        { title: '📃𝗠𝗲𝗻𝘂́ 𝗣𝗿𝗶𝗻𝗰𝗶𝗽𝗮𝗹💻', id: '.menulist', description: '𝙴𝚡𝚙𝚕𝚘𝚛𝚊 𝚝𝚘𝚍𝚊𝚜 𝚕𝚊𝚜 𝚏𝚞𝚗𝚌𝚒𝚘𝚗𝚊𝚕𝚒𝚍𝚊𝚍𝚎𝚜 𝚍𝚎𝚕 𝚋𝚘𝚝' },  
        { title: '👾𝗦𝘂𝗯-𝗕𝗼𝘁🤖', id: '.code', description: '𝙷𝚊𝚜𝚝𝚎 𝚜𝚞-𝚋𝚋𝚘𝚝 𝚢 𝚞𝚜𝚊𝚕𝚊 𝚍𝚎 𝚏𝚘𝚛𝚖𝚊 𝚙𝚛𝚒𝚟𝚊𝚍𝚊' },  
        { title: '🧛‍♂️ Męnü RPG', id: '.menurpg', description: 'Åventūras y cømåndøs RPG ţerrøríficos' },  
        { title: '👑 Øwner', id: '.owner', description: 'Cøntáctø dęl ądmînïstrådør dęl bø†' },  
        { title: '📡 Êstädø', id: '.estado', description: 'Mïrå ęl ęstädø åctuål dęl bø†' },  
        { title: '🎵 Plåy', id: '.play', description: 'Ręprødúcę músîcå dęspuės dę Hålłøwęęn 🎧' },  
        { title: '⚙️ Ênãble', id: '.enable', description: 'Åctîvå functîønęs ęspęcíålęs dęl bø†' },  
        { title: '💡 Øn', id: '.on', description: 'Êncíéndę módøs y funcîønęs ęn łînéå' },
        { title: '📜 Script', id: '.script', description: 'Múęstrą ęl scripţ dęl Bø†' }
      ]
    }  
  ]  

  const msg = {  
    viewOnceMessage: {  
      message: {  
        messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 },  
        interactiveMessage: {  
          body: {   
            text: `*IA NETPLUSE BOT * ☣️

Bïęnvęnïdø ąl męñú ęmbrųjądø dę Hålłøwęęn:

- 🕸️ Ęxplørą tødøs løs hęchîzøs y cømåndøs  
- 💀 Cønvîërtę ën ël męjór süb-bø†s  
- 🧛‍♂️ Åventúråtę ën ël męñú RPG øscürø y dîvęrtîdø  

Selecciona una opción:`
          },  
          footer: { text: '> ⓘ𝘕𝘦𝘵𝘗𝘭𝘶𝘴𝘦🔏 | 🪪*Copyright@ElvisSF*'},  
          header: {  
            type: 'IMAGE',  
            imageUrl: 'https://i.imgur.com/3fJ1P1b.png',  
            title: 'Lista de opciones *NetpPluse* Bot🤖'  
          },  
          nativeFlowMessage: {  
            buttons: [  
              {  
                name: 'single_select',  
                buttonParamsJson: JSON.stringify({  
                  title: '📂 VER OPCIONES',  
                  sections  
                })  
              }  
            ]  
          }  
        }  
      }  
    }  
  }  

  await conn.relayMessage(m.chat, msg.viewOnceMessage.message, {})  
  m.react('✅')  
}  

handler.command = ['menu',]  
handler.tags = ['main']  
handler.help = ['menulist']
handler.register = true

export default handler