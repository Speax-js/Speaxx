const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message, args) => {
  const duration = moment
    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");

  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Statistics <a:ucgensgif:786498899824869386>")
    .addField(" Members: ", client.guilds.reduce((a, b) => a + b.memberCount, 0))
    .addField(" Channnels:", client.channels.size)
    .addField("  Servers:", client.guilds.size);
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["statistics", "botbilgi", "bot-bilgi", "i"],
  permLevel: 0
};

exports.help = {
  name: "statistics",
  description: "İstediğiniz şeyi bota yazdırır.",
  usage: "duyuru [duyuru]"
};
