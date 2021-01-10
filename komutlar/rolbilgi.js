const Discord = require("discord.js");
const superagent = require("superagent");
const ayarlar = require('../ayarlar.json');

module.exports.run = async (client,message,args) => {
 
   let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(rol => rol.id === args[0]);
  
  var wasait = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription("❌ Bir rol etiketlemelisin! ``Örneğin: w!rolbilgi @rol``");
  if(!role) return message.channel.send(wasait);
  
  var moment = require("moment");
  var temps = moment(message.createdTimestamp).format("LLLL");
  
  var wasaitEmbed = new Discord.MessageEmbed()
  
  .setColor('GREEN')
  .addField('Rol Adı', role.name, true)
  .addField('ID', role.id, true)
  .addField('Bu Role Sahip Kullanıcılar', role.members.size, true)
  .addField('Renk', role.hexColor, true)
  .addField('Etiket', role.mentionable ? '\Evet' : 'Hayır', true)
  .addField('Rol Oluşturma Tarihi', moment(role.createdAt).format("LL"), true)
  .setThumbnail( message.author.avatarURL({ dynamic: true, format: 'png', size: 1024 }))

  
  message.channel.send(wasaitEmbed)
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'rolbilgi',
  description: 'SênørJâckš' ,
  usage: 'SênørJâckš'
};