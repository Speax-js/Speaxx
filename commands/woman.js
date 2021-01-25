const Discord = require("discord.js")
const fs = require("fs")
const ayarlar = require("../ayarlar.json")
const talkedRecently = new Set();

exports.run = (client, message, args) => {

    message.delete(message)

    if (talkedRecently.has(message.author.id)) {
        message.reply(`3 seconds  Wait `).then(m => {
            setTimeout(() => {
                m.delete(m)
            }, 1000); //5 seconds
        })
    } else {
        fs.readFile('./woman.txt', function(err, data){
            if(err) throw err;
            data = data + '';
            var lines = data.split('\n');
            let random = lines[Math.floor(Math.random()*lines.length)];

            let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
            let embed = new Discord.RichEmbed()
            .setTitle(`<a:arm:786159638135308308> Woman Gif <a:arm:786159638135308308>`)
            .setImage(`${random}`)
            .setColor(`PINK`)
            message.channel.send(embed)
            talkedRecently.add(message.author.id);
            setTimeout(() => {
                talkedRecently.delete(message.author.id);
            }, ayarlar.cooldown * 60 *100);

        })
    }
} //
//nerde tamam 1
//        .setThumbnail('https://')