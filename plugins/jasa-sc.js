let handler = async (m, { conn, command }) => {
    conn.reply(m.chat, `*「 RECODED BY ANDYMRLIT 」*

*⭔ Group bot*
_https://chat.whatsapp.com/BmezZ2wg7zcI1yhESwv2NE_

*⭔ Azami node_modules*
_https://instagram.com/andy_mr_lit_

*Original Base From :*
_https://github.com/BochilGaming_
`, m)
}

handler.command = /^(sc|sourcecode)$/i

export default handler