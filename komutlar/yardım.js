const Discord = require('discord.js');
 
exports.run = (client, message, args) => {
 
  let pages = [
              '**◤---------------------------► Genel Menü ◄---------------------------◥**\n\n `Prefix`** = w!**\n`Botun Sahibi`** = **<@427067770837139456>\n`Bot Davet Linki`** = **[Davet Et](https://discord.com/oauth2/authorize?client_id=784795240896659466&scope=bot&permissions=8)\n`Bot Vote Linki`** = **[Vote](https://top.gg/bot/784795240896659466/vote) \n `Son Update` **=** ||28.12.2020||\n\n`Bir Probleminmi Var ?, Yardım Sunucusuna Gel` **-->** [Sunucu](https://discord.gg/c48r9aJeDA)\n`Anlık Komut Sayımız`** : 105**\n\n `Wolf Bot Ne İşe Yarar`** : **Wolf Bot İçinde Bulunan Komutlar Sayesinde Üyeleri Güldüren Onlara Özel Banner Vb Şeyler Tasarlayan Ve Sunucu İçin Özel Ayarlar Yapan Bir Genel Bottur.\n\n ```En Çok Kullanılan Komutlar```\n `w!sor <soru>`** = **Yapay Zeka Vardır Sorduğunuz Soruya Cevap Verir.\n`w!sunucutanıt`** = **Yapımcımın Dcsinde Reklam Yapar.\n`w!otorol`** = **Otorol Komutlarını Gösterir.\n`w!sayaç <rakam>`** = **Giriş Çıkışı kaydeder.\n`w!sil <1-100>`** = **Miktarda Mesaj Siler.\n`w!istatistik` = Bot İstatistiklerini Görürsünüz.\n`w!tavsiye <mesaj>` = Yapımcıma Tavsiyenizi Belirtir.\n`w!bug-bildir <mesaj>` = Yapımcıma Bug Bildirir.\n\n ```Yenilikler Ve Giderilen Hatalar```\n`w!rolbilgi <rol>` = Rol Hakkında Bilgi Verir.\n`w!yayıncı-adamasmaca` = Adam Asmaca Yayıncı İçerikli.\n`w!meyve-adamasmaca` = Adam Asmaca Meyve İçerikli\n\n`Düzeltilen Sorun-1` = Oynuyor Yazısındaki Kapanma Düzeltildi.\n\n**◣---------------------------------------------------------------------------◢**',
              '```Yetkili Komutlar```\n\n ``w!sil <1-100>`` = Belirtilen Miktarda Mesaj Siler. \n ``w!rol-ver <Kullanıcı> <rol>`` = Etiketlediği Kişeye İsdeğin Rolu Verir.\n ``w!rol-al <Kullanıcı> <rol>`` = Etiketlediği Kişeye İsdeğin Rolu Alır.\n ``w!sunucukurv2`` = Otomatik Odalar Açar.[Odaların Resmi](https://i.hizliresim.com/FXoZ4u.jpg)\n ``w!mute <ASKIDA>`` \n ``w!unmute <ASKIDA>``\n ``w!mod-log <<<<<YAKINDA>>>>>``\n ``w!oylama <Oylama Nedeni>`` = Oylama Başlatır. \n ``w!everhereengel <<<<<YAKINDA>>>>>``\n ``w!kanal-koruma <<<<<YAKINDA>>>>>``\n ``w!lock`` = Sohbeti Kitler.\n ``w!unlock`` = Sohbeti Kilidini Açar.\n ``w!ban- <kullanıcı> <sebeb>`` = Etiketlediğin Kişiyi Sunucudan Banlar. \n ``w!kick <kullanıcı>`` = Etiketlediğin Kişiyi Sunucudan Kickler.\n ``w!duyuru <@everyone> <Mesajınız>`` = Bot Duyuru Yapar.\n ``w!küfür-engel <aç-kapat>`` = Küfür Edeni Uyarır.\n ``w!reklam-engel <aç-kapat>`` = Reklam Yapanın Reklamını Siler.\n ``w!slowmode <1-20>`` = Metin Kanalında Mesaj Yazma Hızı Ayarlar.\n ``w!forceban <id>`` = Kullanıcıya İd Ban Atarsınız.\n ``w!unban <id>`` = Kullanıcının Banını Kaldırırsın.\n ``w!sa-as <aç-kapat>`` = Biri Sa Dedimi Bot Cevap Verir.\n ``w!botkontrol`` = Bot Çalışıyormu Kontrol Eder.\n ``w!davet-sıralaması`` = Kimin Kaç Kişi Davet Ettiğini Sıralar.\n ``w!otorol`` = Otorol Komutlarını Gösterir.\n ``w!sayaç`` <miktar>  = Sayaç Miktarını Ayarlar.\n ``w!sayaç-kanal-ayarla <#kanal>`` = Sayaç Log Kanalını Ayarlar.\n ``w!id <kullanıcı>`` = Kullanıcının İd Görürsün.\n ``w!emojiler`` = Sunucudaki Emojileri Görürsün.\n ``w!alıntı <Mesaj İd>`` = Mesaj Silnmicek Şekilde Kaydeder.\n ``w!isimdeğiştir <kullanıcı> <yeni isim>`` = Üyelerin İsmini Değiştirir.\n ``w!uyarı`` = Uyarı Komularını Gösterir.',
              '```Kullanıcı Komutları```\n\n ``w!sunucubilgi`` = Sunucunu Detaylı Bilgisini Gösterir.\n ``w!yetkilerim`` = Sunucudaki Yetkilerini Gösterir.\n ``w!deprembilgi`` = Güncel Deprem Bilgisini Gösterir. \n ``w!bug-bildir <Metin>`` = Yazdığınız Bugu Yapımcıma Bildirir. \n ``w!istatistik`` = Bot İstatistiklerini Görürsünüz.\n ``w!davet`` = Beni Sunucuna Ekle.\n ``w!sunucuresmi`` = Sunucu Resmini Gösterir.\n ``w!avatar`` = Avatarınıza Bakarsınız.\n ``w!ping`` = Pinginizi Bakarsınız.\n ``w!ekran-paylaş`` = Seslide Ekran Palyaşmaya Yarar .\n ``w!tavsiye <Metin>`` = Bot Sahibine Tavsiyenizi İletirsiniz.\n ``w!rastgeleşifre`` = Rasgele Şifre Oluşturur.\n ``w!rolbilgi <rol>`` = Rol Hakkında Bilgi Verir.',
              '```Kişeye Özel Logo Komutları```\n\n ``w!dinamik <Metin>`` = Dinamik Logo Oluşturur.\n ``w!altın <Metin>`` = Altın Logo Oluşturur.\n ``w!banner <Metin>`` = Banner Logo Oluşturur.\n ``w!basit <Metin>`` = Basit Logo Oluşturur.\n ``w!elmas <Metin>`` = Elmas Logo Oluşturur.\n ``w!sarı <Metin>`` = Sarı Logo Oluşturur.\n ``w!neonmavi <Metin>`` = Neon Mavi Logo Oluşturur.\n ``w!kalın <Metin>`` = Kalın Logo Oluşturur.\n ``w!anime <Metin>`` = Anime Yazı Tipinde Logo Oluşturur.\n ``w!habbo <Metin>`` = Habbo Yazı Tipinde Logo Oluşturur.\n ``w!arrow <Metin>`` = Ok İşaretli Logo Oluşturur.\n ``w!green <Metin>`` = Yeşil Logo Oluşturur.\n ``w!alev <Metin>`` = Alevli Logo Oluşturur.\n ``w!red <Metin>`` = Kırmızı Logo Oluşturur.',
			  '```Eğlence Komutları```\n\n ``w!tersyazı <metin>`` = Bir Yazıyı Bot Ters Yazar.\n ``w!kelime-hesapla <metin>`` = Yazdığınız Metinlerdeki Kelimeyi Hesaplar.\n ``w!dans <1-8>`` = Sembollerden Oluşmuş Dans Harketleri Çıkar.\n ``w!zar-at`` = Zar Atar.\n ``w!havadurumu <şehir>`` = İstediğiniz Şehrin Havadurumunu Öğrenirsiniz..\n ``w!oyunara <oyun ismi>`` = Yazdığınız Oyunun İstatistiklerini Paylarşır.\n ``w!mcskin <skin ismi>`` = Yazdığınız İsmin Minecraft Karakter Görünüşünü Atar.\n ``w!fbi`` = Bot FBi Gif Atar.\n ``w!aile`` = Aile Gif Atar.\n ``w!düello <kullanıcı>`` = Biriyle Düello Atarsın.\n ``w!wasted`` = Polis Tarafından Yakalanırsın.\n ``w!atatürk`` = Dene Ve Gör... (1881-1938).\n ``w!alkış`` = Alkış Gif Atar.\n ``w!ara155`` = Polis Gif Atar.\n ``w!aşkölçer <kullanıcı>`` = Etiketlediğin Kişi İle Arandaki Aşkı Ölçer.\n ``w!boks-makinesi`` = Vur Bakalım En güçlü Kim.\n ``w!zula-deste-aç`` = Zula Oyunundaki Destelerden Açar.\n ``w!doğrulukcesaret`` = Doğruluk Ve Cesaretlik Oynarsın.\n ``w!espiri`` = Espiri Yapar.\n ``w!ilginçbilgi`` = İlginç Bilgi Söyler.\n ``w!kafasalla`` = Kafa Sallağan Gif Atar.\n ``w!kapaklaflar`` = Kapak Edcek Laflar Atar.\n ``w!csgokasaaç`` = Csgo Oyunundan Kasa Açar.\n ``w!kaçcm`` = Kaç Santim Oldunu Ölçer.\n ``w!kralol`` = Kral Olursun.\n ``w!mcbasarim <Metin>`` = Minecraftaki Başarımı Kendine Göre Düzenler.\n ``w!mesajdöndür`` = Mesajınızı Döndürür.\n ``w!tekerleme`` = Tekerleme Atar.\n ``w!türk`` = Yaşasın Irıkımız.\n ``w!yazı-tura`` = Yazi Tura Atar.\n ``w!şanslısayım`` = Şanslı Sayını Gösterir.\n ``w!animeara <Anime Adı>`` = Anime Hakkında Bilgi Verir.\n ``w!jsal`` = Brawl Stars Oyunundan Kutu açar.\n ``w!günlük-burc-yorumu <Burcun>`` = Burcun Hakkında Günlük Bilgi Verir.\n ``w!öp <Kullanıcı>`` = Kullanıcıyı Öper.\n ``w!wwegif`` = Wwe Gif Atar.\n ``w!yayıncı-adamasmaca`` = Adam Asmaca Yayıncı İçerikli.\n ``w!meyve-adamasmaca`` = Adam Asmaca Meyve İçerikli.',
              ];
  let page = 1;
 
  const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
	.setImage('https://media0.giphy.com/media/MJxQzQnmyuzyJ0fQ8B/giphy.gif')
  message.channel.send(embed).then(msg => {
 
  msg.react('⬅')
  .then(r => {
    msg.react('➡')
 
      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡' && user.id === message.author.id;
 
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });
 
      forwards.on('collect', r => {
        if(page === pages.length) return;
        page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
 
    })
  })
};
 
 
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["help", "y", "h"],
permLevel: 0
};
 
exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};
