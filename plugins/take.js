const Asena = require("../Utilis/events");
const { MessageType, Mimetype } = require("@adiwajshing/baileys");
const Language = require("../language");
const { webpToMp4 } = require("../Utilis/download");
const { sticker, addExif } = require("../Utilis/fFmpeg");
const Lang = Language.getString("sticker");

Asena.addCommand(
  { pattern: "take ?(.*)", fromMe: true, desc: Lang.TAKE_DESC },
  async (message, match) => {
    if (!message.reply_message.sticker || !message.reply_message)
      return await message.sendMessage(Lang.TAKE_NEED_REPLY);
    return await message.sendMessage(
      await addExif(
        await message.reply_message.downloadAndSaveMediaMessage("take"),
        match
      ),
      {
        mimetype: Mimetype.webp,
        isAnimated: message.reply_message.animated,
        quoted: message.quoted,
      },
      MessageType.sticker
    );
  }
);
