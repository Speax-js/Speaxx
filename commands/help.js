const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message,args) => {
  const yardimembed = new Discord.RichEmbed()
  .setAuthor(`${client.user.username}`, client.user.avatarURL)// komutu kullanan kişinin ismi ve yanına avatarı...
  .setColor('RANDOM')//embeddeki kenar rengini rast gele seçtim...
  .setTitle(`${client.user.username} Help Menu.`) //en üst kısım, botun ismi ve yazı
  .setThumbnail("https://cdn.discordapp.com/attachments/686125237686894609/695582818289451018/downloadfile.gif")
  .addField("Commands:", `\
   <a:673430307051012096:784814486828875837> !man = Random boy throws the gif. 
   <a:673430307051012096:784814486828875837> !woman = Random girl throws the gif. 
   <a:673430307051012096:784814486828875837> !statistics = You will see the bot's statistics.
   <a:673430307051012096:784814486828875837> !avatar = It shows the avatar of the person you want.
   <a:673430307051012096:784814486828875837> !add = You add the emoji you want.
   <a:673430307051012096:784814486828875837> !change = You can change the channel description to your liking. `)
  .addField(`Davet Linkleri`, `[Invite Link](https://discord.com/oauth2/authorize?client_id=786160674504966154&scope=bot&permissions=1073741824)   **|**   [Support Server](https://discord.gg/qAdBrjdCjN)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`Asked by ${message.author.username}.`, message.author.avatarURL)
  message.channel.send(yardimembed)//bu embedyardimin gideceği yer kullanılan kanal olarak ayarladık.
}
exports.conf = {
  enable: true, //komutun çalışıp çalışmamasını ayarlarsınız.
  guildOnly: false, //komutun özelde kapalı olmasını istiyorsanız false, dm de kullanılmasını isterseniz true yapın.
  aliases: ["yardim", "help", "y"], //ek komut eklersiniz
  permLevel: 0 //kullanım izni, eğer rol bağlarsanız 0 yapın, yakında anlatım gelir.
}
exports.help = {
  name: "help", //komutu çalıştırmaya yarıyor.
  description: "yardım komutudur", // komut hakkında açıklama yapar önemli bir şey değildir.
  usage: "yardım" //kullanımı gösterir buda önemli değildir.
}
