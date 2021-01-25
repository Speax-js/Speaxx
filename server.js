require("http").createServer(async (req,res) => { res.statusCode = 200; res.write("ok"); res.end(); }).listen(3000, () => console.log("Now listening on port 3000"));
const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client()
const ayarlar = require("./ayarlar.json")
const token = "Nzg2MTYwNjc0NTA0OTY2MTU0.X9CXLg.eGttwix6DjBRODrNEv1hGQHi1dE"


client.on('ready', () => {
   client.user.setPresence({
        game: {
            name: `!invite | ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Members; ${client.guilds.size.toLocaleString()} Servers` ,
            type: "LISTENING"
        }
   })

   console.log(`ok`)


});


client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(ayarlar.prefix) !== 0) return;
      
    const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
      
    try {
    let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});


client.on('message', message => {
  console.log('Semo Was Were')
});


client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));

client.login(ayarlar.token)

////////////


client.on("message", message => {
var prefix = "!"
  if (message.content.startsWith(prefix + "change")) {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("MANAGE_CHANNEL")) return;
    var a = message.content
      .split(" ")
      .slice(1)
      .join("  ");
    if (!a) return message.reply("Write something to write about.!");
    message.channel
      .setTopic(`${a}`)
      .then(newChannel => message.channel.send(`Description has been changed successfully. **${a}**`))
      .catch(console.error);
  }
});