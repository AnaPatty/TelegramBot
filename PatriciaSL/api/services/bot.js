var TelegramBot=require('node-telegram-bot-api');
var token='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
var bot=new TelegramBot(
	token,{
		polling:true
	});
bot.getMe().then(function (me){
	console.log('Hi my name is %s!', me.username);
});
bot.onText(/^\/soy (.+)$/, function (msg, match){
	var name=match[1];
	console.log(msg);
	bot.sendMessage(msg.chat.id,`!Hola ${name} !`).then(function(){
		console.log(`saludo a ${name}`);
	});
});

bot.onText(/^\/foto parís/, function (msg, match){
	var photo_id = './assets/images/paris.jpg'; 
	console.log(msg);
   bot.sendPhoto(msg.chat.id, photo_id,{
        caption:'Foto de parís'
    });
    console.log("Enviando foto");
});

bot.onText(/^\/ubicacion iglesia principal/, function (msg, match) {
    var longitud =-98.3682459;
    var latitud =20.0806283;
    console.log(msg);
    bot.sendLocation(msg.chat.id, latitud, longitud, {
        caption:'catedral metropolitana de tulancingo'
    });
    console.log("Ubicacion enviada");
});


bot.onText(/^\/video risa/, function (msg, match) {
    var video = './assets/video/video_risa.mp4';
    console.log(msg);
    bot.sendVideo(msg.chat.id, video,{
        caption:'Video para reir'
    });
    console.log("Enviando video");
});

bot.onText(/^\/libro triste/, function (msg, match) {
    var libros = './assets/documentos/libro_triste.pdf';
    console.log(msg);
    bot.sendVideo(msg.chat.id, libros,{
        caption:'El libro más triste del mundo'
    });
    console.log("Enviando libro");
});
