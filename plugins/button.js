const WhatsAlexa = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

WhatsAlexa.addCommand({pattern: 'bot', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {

// send a buttons message!

    const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '𝚈𝚎𝚜🥰'}, type: 1},

        {buttonId: 'id2', buttonText: {displayText: '𝙽𝚘😼'}, type: 1},

        {buttonId: 'id3', buttonText: {displayText: '𝚆𝚑𝚘 𝚊𝚛𝚎 𝚢𝚘𝚞😅'}, type: 1}

      ]

      

      const buttonMessage = {

          contentText: "𝙷𝚒 𝚋𝚛𝚘 𝚍𝚘 𝚢𝚘𝚞 𝚕𝚒𝚔𝚎 𝚖𝚎🙂?",

          footerText: 'owner Kichu  ©',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
