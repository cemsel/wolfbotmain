const  Discord = require("discord.js"); 

exports.run = (client, message, args) => {

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle("Beni Sunucuna Ekle ❤️")
  .setDescription("[__**Davet Et**__](https://discord.com/oauth2/authorize?client_id=784795240896659466&scope=bot&permissions=8) \n \n [__**Destek Sunucusu**__](https://discord.gg/c48r9aJeDA)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet'],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};