/*
made by lasi honna pora mekath ganin 😂
*/

const Asena = require('../events');
const {MessageType} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');


if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        
        let pp
        try {
             pp = await message.client.getProfilePicture(
                message.jid.includes('-') ? message.data.participant : message.jid ); } 
             
             catch { pp = await message.client.getProfilePicture(); }
        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) =>
         { await message.client.sendMessage(message.jid, res.data, MessageType.image, { caption: "\n»»————　♔　———-««\n" + Config.ALIVEMSG });
    
    });
    }));

}
else if (Config.WORKTYPE == 'public') {

   Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        
        let pp

        try {
             pp = await message.client.getProfilePicture(
                 message.jid.includes('-') ? message.data.participant : message.jid ); } 
                 
                 catch {
                      pp = await message.client.getProfilePicture(); }

        await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) =>
         { await message.client.sendMessage(message.jid, res.data, MessageType.image, { caption: "\n»»————　♔　———-««\n" + Config.ALIVEMSG });
         });
    }));
 
}
