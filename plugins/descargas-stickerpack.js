/* By https://github.com/ALBERTO9883/NyanCatBot-MD */
import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[β] Ejemplo de uso del comando ${usedPrefix + command}* https://getstickerpack.com/stickers/flork-memes-4-1`
try {
let url = text
let res = await fetch(`https://api.akuari.my.id/downloader/stickerpack?link=${url}`)
let json = await res.json()
for (let data of (json.result || json)) {
const stikers = await sticker(false, data, global.packname, global.author)
conn.sendFile(m.chat, stikers, null, { asSticker: true }, m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': true }}, { quoted: m })
await delay(5000)
}} catch {   
await m.reply('*[β] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄ππ½ππ°ππ»πΎ*')  
}}
handler.command = /^stickerpack$/i
export default handler
const delay = time => new Promise(res => setTimeout(res, time))
