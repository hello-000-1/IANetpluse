const handler = async (m, {conn}) => {
  m.reply(global.ComprarBot);
};
handler.command ='comprarbot',/^(ComprarBot|Comprar|comprar|ComprarBot)$/i;
export default handler;

global.ComprarBot = `
〔 *Netpluse- BOT* 〕

*BOT PARA GRUPO* :
> wa.me/51939467706

*BOT PERZONALIZADO* :
> wa.me/51928567606
`;