let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[β] πππππππ ππ πππππ ππΌππΌ πΎπππΌπ πππΌ πππΌπππ π πΌππ πππΌπ ππΌ ππππΎπππ πΏπ πΏπΌππ-π*\n\n*β πππππππ πΏπ πππππΎπππππ*\n*β ${usedPrefix + command} gatitos llorando*\n*β ${usedPrefix + command} gata besos*`
try {
m.reply('*[β] ππππππ ππ πππππππ ππ ππ πππ ππΌππΏπ ππ πππ ππ πππΏππ*')
let tiores = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
await conn.sendFile(m.chat, tiores.data, null, null, m)
} catch {
throw `*[β] πππππ, ππππππΌ πΌ πππππππΌ*`
}
}
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai2']
handler.level = 1
export default handler
