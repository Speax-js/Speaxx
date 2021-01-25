const Discord = require('discord.js');

exports.run = (client, message, args) => {// can#0002
if(!message.member.hasPermission('MANAGE_EMOJIS')) return message.channel.send('You must have the ``Manage Emojis`` authority to use this command.');
if(!args[0]) return message.channel.send('You must write a link and a name. `!add https://cdn.discordapp.com/emojis/753237158248054905.gif?v=1 semoloper`');
if(!args[1]) return message.channel.send('You have to type an emoji name. `!add https://cdn.discordapp.com/emojis/753237158248054905.gif?v=1 semoloper`');
if(['ç', 'ö', 'ü', 'ş', 'İ', 'I', 'ğ', 'Ç', 'Ö', 'Ü', 'Ş', 'Ğ'].includes(args[1])) return message.channel.send('**Türksün galiba türkçe karatker kullanma be!**');
message.guild.createEmoji(args[0], args.slice(1).join(' ')).then(s => {
message.channel.send(`${s.name} created emoji name. (${s})`);
});
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['emojiekle'],
  permLevel: 0
};
 
exports.help = {
  name: 'emoji-ekle'
};// semoloper