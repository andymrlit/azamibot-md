let handler = async (m, { conn, command }) => {
    conn.reply(m.chat, `*「 RECODED BY ANDYMRLIT 」*

*⭔ Group bot*
_https://chat.whatsapp.com/BmezZ2wg7zcI1yhESwv2NE_

*⭔ MY INSTAGRAM*
_https://instagram.com/andy_mr_lit_

*contact me to get script :*
_https://wa.me/50941411147
`, m)
}

handler.command = /^(sc|sourcecode)$/i

export default handler
