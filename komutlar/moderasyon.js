const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Wolf Bot V12 botuyla sizlerle.")
.setTitle(" Wolf Bot V12 Moderasyon Komutları")
 .setTimestamp()
.setDescription("**w!sil** = Yazdığınız miktarda mesajı siler.  \n **w!rol-ver** = Rol vermeye yarar.  \n **w!rol-al** = Rol almaya yarar.  \n **w!sunucukurv2** = Sıfırdan Yeni v2 Sunucu Kurar.  \n **w!sunucukur**  = Sıfırdan Yeni Sunucu Kurar.  \n **w!unmute** = Etiketlediğiniz Kişinin mute kaldırır.  \n  **w!mute** = Etiketlediğiniz Kişiyi Susturur.  \n **m!modlog-sıfırla** =Mod log Kanalını Sıfırlar \n **m!mod-log** =Yapılan Değişiklikleri Kaydeder \n **m!ban-limit** =Max Banlancak Kişi Sayısı \n **m!ban-log** = Banların Kayıt Edileceği yer \n **w!oylama** = Oylama Başlatır \n **w!everhereengel** = Everyone Açar Veya Kapatır. \n **w!kanal-koruma ** = Kanal Silmeyi Engeller \n **w!sohbet-kapat** = Metin Yazmayı Kapatır \n **w!sohbet-aç** = Metin Yazmayı Açar \n **w!ban** = Etiketlediğiniz kişiyi banlarsınız. \n  **w!kick** = Etiketlediğiniz kişiyi atarsınız. \n  **w!duyuru** = Bota duyuru yaptırırsınız. \n **w!küfür-engel** = Küfür engel sistemini açarsınız. \n **w!reklam** = Reklam engel sistemi açarsınız. \n **w!slowmode** = Yavaş modu ayarlarsınız.\n**w!forceban** = Birisine id ban atarsınız. \n **w!unban** = Birisinin banını açarsınız. \n **w!sa-as** = Bot biri sa dedimi cevap verir. \n **w!sunucubilgi** = Sunucu bilgilerini görürsün.")
.setImage("https://i.hizliresim.com/N3LMQ1.png")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}