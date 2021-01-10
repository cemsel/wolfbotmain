const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  if (!message.member.voice.channel) return message.channel.send(new Discord.MessageEmbed().setDescription("Bir sesli kanalda değilsiniz!").setColor('RANDOM'));
  else message.channel.send(new Discord.MessageEmbed().setDescription(`**[Ekran Paylaşımı](https://discordapp.com/channels/${message.guild.id}/${message.member.voice.channel.id})**`).setColor('RANDOM'));
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: 'ekran-paylaş',
  description: 'Sesli kanalda ekran paylaşmanızı sağlar.',
  çalma: 'ekran-paylaş',
};