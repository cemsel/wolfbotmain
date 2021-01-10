const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Wolf Bot V12 sürümüyle yeniden sizlerle.")
.setTitle("Wolf Bot V12 Kullanıcı Komutları")
 .setTimestamp()
.setDescription("**w!avatar** = Avatarınıza bakarsınız. \n **w!yetkilerim** = Yetkilerini görürsün. \n **w!sunucuresmi** = Sunucu resmini gösterir. \n **w!ping** = Botun Pingine Bakarsın. \n **w!id** = Birisinin id'sine Bakarsın. \n **w!davet** = Beni Sunucuna Ekle. \n **w!istatistik** = Bot istatistiklerini görürsünüz. \n  **w!bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir.")
.setImage("https://i.hizliresim.com/N3LMQ1.png")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}