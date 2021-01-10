const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Şanslı Sayını Hesaplıyorum..').then(message => {
   var espriler = ['Senin Şanslı Sayın 31 ' ,'Senin Şanslı Sayın 56 ' ,'Senin Şanslı Sayın 98 ' ,'Senin Şanslı Sayın 84' ,'Senin Şanslı Sayın 46 ' ,'Senin Şanslı Sayın 182' ,'Senin Şanslı Sayın 861' ,'Senin Şanslı Sayın 271' ,'Senin Şanslı Sayın 53' ,'Senin Şanslı Sayın 8172  ' ,'Senin Şanslı Sayın 91 '  ,'Senin Şanslı Sayın 3131  C E N A B E T '   ,'Senin Şanslı Sayın 41'  ,'Senin Şanslı Sayın 32'  ,'Senin Şanslı Sayın 4251'  ,'Senin Şanslı Sayın 2'  ,'Senin Şanslı Sayın 11'  ,'Senin Şanslı Sayın 51'  ,'Senin Şanslı Sayın 39'  ,'Senin Şanslı Sayın 1'  ,'Senin Şanslı Sayın 121'  ,'Senin Şanslı Sayın 59'  ,'Senin Şanslı Sayın 32'  ,'Senin Şanslı Sayın 11'  ,'Senin Şanslı Sayın 55'  ,'Senin Şanslı Sayın 01 '];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şanslısayım', 'şanslı-sayım', 'sayım-şanslı', 'sayımşanslılan'],
  permLevel: 0
};

exports.help = {
  name: 'şanslısayım',
  description: 'Şanslı Sayınızı Tahmin Eder.',
  usage: 'şanslısayım'
};