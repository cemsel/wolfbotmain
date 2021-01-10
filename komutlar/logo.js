const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Wolf Bot V12 sürümüyle yeniden sizlerle.")
.setTitle(" Wolf Bot V12 Logo Komutları")
 .setTimestamp()
.setDescription("**w!dinamik** = Dinamik logo oluşturur. \n **w!altın** = Altın logo oluşturur. \n **w!banner** = Banner logo oluşturur. \n **w!basit** = Basit logo oluşturur. \n **w!elmas** = Elmas logo oluşturur. \n **w!sarı** = Sarı logo oluşturur. \n **w!neonmavi** = Neon mavi logo oluşturur. \n **w!kalın** = Kalın logo oluşturur. \n **w!anime** = Anime yazı tipinde logo oluşturur. \n **w!habbo** = Habbo yazı tipinde logo oluşturur. \n **w!arrow** = Ok işaretli logo oluşturur. \n **w!green** = Yeşil logo oluşturur. \n **w!alev** = Alevli logo oluşturur. \n **w!red** = Kırmızı logo oluşturur.")
.setImage("https://i.hizliresim.com/N3LMQ1.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}