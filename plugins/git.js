const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "https://i.imgur.com/ue1d5zW.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*creater Kichu*
*owner number wa.me/919567321848*

*githublink : https://github.com/KICHU***/Lisa Mwol*
*Find the start* ☝️😁
        
              𝙇𝙞𝙨𝙖 𝙈𝙬𝙤𝙡 𝘽𝙤𝙩 𝘽𝙮 𝙆𝙞𝙘𝙝𝙪
`}) 

}));
