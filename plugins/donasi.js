import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = 'https://telegra.ph/file/39d610f030b3eba4d41f6.jpg'
    return conn.sendButton(m.chat, 'Scan QR Di atas\n❏ Donasi minimal 500p :v', donate, img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://youtube.com/c/DEVIL-X-CODE",
                mediaType: "VIDEO",
                title: 'Donasi To HotGirl',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler