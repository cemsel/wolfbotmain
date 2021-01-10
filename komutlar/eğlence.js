const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Wolf Bot")
.setTitle("Wolf Bot Eğlence Komutları ")
 .setTimestamp()
.setDescription("**w!tersyazı** = Bir Yazıyı Bot Ters Yazar.  \n  **w!kelime-hesapla** = Yazdığınız Metinlerdeki Kelimeyi Hesaplar  \n **w!dans** = Sembollerden oluşmuş dans harketleri çıkar  \n **w!zar-at** = zar atar  \n **w!havadurumu** = İstediğiniz Şehrin Havadurumunu öğrenirsiniz.  \n **w!oyunara** = Yazdığınız oyunun istatistiklerini paylarşır.  \n **w!mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n  **w!fbi** = Bot FBi Gif Atar.  \n  **w!aile** = Aile Gif Atar?  \n  **w!düello** = Düello Atarsın.  \n  **w!wasted** = Polis tarafından yakalanırsın.  \n  **w!atatürk** = Dene ve gör... (1881-1938) ")
.setImage("https://i.hizliresim.com/N3LMQ1.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}