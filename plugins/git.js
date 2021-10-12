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
*owner number: http://wa.me/919567321848?text=𝐇𝐥𝐨%20𝐊𝐢𝐜𝐡𝐮%20*
*githublink* : https://github.com/KICHU***/lisamwol
*Find The Stars*☝️😁
*Use this githublink : https://tinyurl.com/ygph7lgc*
       *Lisamwol Bot By Kichu*
`}) 

}));
