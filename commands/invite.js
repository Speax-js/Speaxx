const Discord = require("discord.js");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {
  const yardım = new Discord.RichEmbed()
    .setColor(0x36393e)
    .setAuthor(`Gif Bot`, client.user.avatarURL)
    .setThumbnail(client.user.avatarURL)
    .addField(" <a:arm:786159638135308308> Bot Invite Link", `To Add Our Bot To Our Server [Click](https://discord.com/oauth2/authorize?client_id=786160674504966154&scope=bot&permissions=1073741824)`)
    .addField(" <a:arm:786159638135308308> Invitation Link of Our Support Server", `Here To Come To Our Support Server [Click](https://discord.gg/qAdBrjdCjN)`)
    .setFooter(
      `Gif Bot`,  
      client.user.avatarURL
    );
  return message.channel.sendEmbed(yardım);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite"],
  permLevel: 0
};

exports.help = {
  name: "invite",
  description: "bot ekleme linkini atar",
  usage: "invite"
};
