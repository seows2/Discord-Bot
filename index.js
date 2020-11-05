const { Client, MessageAttachment, MessageEmbed } = require("discord.js");
const dotenv = require("dotenv");
const Canvas = require("canvas")
dotenv.config();

const PREFIX = "!";
const client = new Client({partials:["MESSAGE","CHANNEL","REACTION"]});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

const applyText = (canvas, text) => {
	const ctx = canvas.getContext('2d');

	// Declare a base size of the font
	let fontSize = 70;

	do {
		// Assign the font to the context and decrement it so it can be measured again
		ctx.font = `${fontSize -= 10}px sans-serif`;
		// Compare pixel width of the text to the canvas minus the approximate avatar size
	} while (ctx.measureText(text).width > canvas.width - 300);

	// Return the result to use in the actual canvas
	return ctx.font;
};

const isMul = (text) => {
  if([...text].filter(_=>_!=="?").length===0) return true

  return false
}

client.on("message", async (msg) => {
  console.log(`${msg.author.username} : ${msg.content}`);
  
  let attachment;
  switch (msg.content) {
    case `${PREFIX}우리핵확대`:
      attachment = new MessageAttachment("https://puu.sh/BFl6b/e962ef0681.gif");
      msg.channel.send(attachment);
      break;
    case `${PREFIX}페페손씻`:
      attachment = new MessageAttachment(
        `https://funzinnu.com/stream/cdn/dccon/` +
        encodeURI("페페손씻") +
        `.gif`
      );
      msg.channel.send(attachment);
      break;
    case `${PREFIX}볼트공중`:
      attachment = new MessageAttachment(
        `https://funzinnu.com/stream/cdn/dccon/` +
        encodeURI("볼트공중") +
        `.png`
      );
      msg.channel.send(attachment);
      break;
    case `${PREFIX}xqcSlam`:
      attachment = new MessageAttachment(
        `https://cdn.betterttv.net/emote/5cb9176c750fbb4a2533fc42/3x.gif`
      );
      msg.channel.send(attachment);
      break;
    case `${PREFIX}더하기펀치`:
      attachment = new MessageAttachment(
        `https://cdn.betterttv.net/emote/5af84b9e766af63db43bf6b9/3x.gif`
      );
      msg.channel.send(attachment);
      break;
    case `${PREFIX}화사`:
      attachment = new MessageAttachment(`hwasa.gif`);
      attachment2 = new MessageAttachment(`icon_44.gif`);
      msg.channel.send(attachment);
      msg.channel.send(attachment2);
      break;
    case `${PREFIX}화사메롱`:
      attachment = new MessageAttachment(`icon_44.gif`);
      msg.channel.send(attachment);
      break;
    case `${PREFIX}씹덕`:
      attachment = new MessageAttachment(`icon_12.gif`);
      attachment2 = new MessageAttachment(`icon_16.gif`);
      msg.channel.send(attachment);
      msg.channel.send(attachment2);
      break;
    case `${PREFIX}넷러너`:
      const exampleEmbed = new MessageEmbed()
        .setColor("#0099ff")
        .setTitle("넷러너 홍보")
        .setURL("http://www.jinteki.net")
        .setAuthor(
          "넷러너",
          "https://www.fantasyflightgames.com/static/images/logo_ffgdiamond_blk.png",
          "http://www.jinteki.net"
        )
        .setThumbnail(
          "https://www.fantasyflightgames.com/static/images/logo_ffgdiamond_blk.png"
        )
        .addFields(
          {
            name: "Netrunner",
            value:
              "넷 ⭐️러너 가입시🔱전원✅모든$$카드⏪100%무료지급🔰\n🕺같은👡방에서 👉단 둘이서👈 함께하는 즐거운 💛놀이💛\n✅비가 오나 눈이 오나 정상 영업✅\n\n ☎즉시이동 http://www.jinteki.net ☎️",
          },
          { name: "\u200B", value: "\u200B" }
        )
        .setImage(
          "https://images-cdn.fantasyflightgames.com/filer_public/cb/fe/cbfe3fde-087f-49fa-aad4-b024b6561366/adn49_feature.jpg"
        )
        .setTimestamp()
        .setFooter(
          "넷러너 부흥 위원회",
          "https://www.fantasyflightgames.com/static/images/logo_ffgdiamond_blk.png"
        );

      msg.channel.send(exampleEmbed);
      break;
    default:
      break;
  }
 if(msg.content.includes("넷") || msg.content.includes("러너")){
  const canvas = Canvas.createCanvas(700,250)
  const ctx = canvas.getContext("2d")

  const background = await Canvas.loadImage("./ex.png")
  ctx.drawImage(background,0,0,canvas.width, canvas.height)

  ctx.strokeStyle= "#74037b"
  ctx.strokeRect(0,0, canvas.width, canvas.height)

  ctx.font= "28px sans-serif";
  ctx.fillStyle = "#ffffff"
  ctx.fillText("\"넷\"을 언급해줘서 고맙다구,", canvas.width/2.5, canvas.height/3.5)

  ctx.font = applyText(canvas, `${msg.author.username}!`)
  ctx.fillStyle = '#ffffff';
  ctx.fillText(`${msg.author.username}!`, canvas.width / 2.5, canvas.height / 1.6);



  ctx.beginPath();
  ctx.arc(125,125,100,0,Math.PI*2,true)
  ctx.closePath()
  ctx.clip()
  
  const avatar = await Canvas.loadImage(msg.author.displayAvatarURL({format:"jpg"}))
  ctx.drawImage(avatar, 25,25,200,200)
  const attachment = new MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

  msg.channel.send(attachment)
 } else if (msg.content === "갓겜"){
    const canvas = Canvas.createCanvas(700,250)
    const ctx = canvas.getContext("2d")
  
    const background = await Canvas.loadImage("./ex.png")
    ctx.drawImage(background,0,0,canvas.width, canvas.height)
  
    ctx.strokeStyle= "#74037b"
    ctx.strokeRect(0,0, canvas.width, canvas.height)
  
    ctx.font= "28px sans-serif";
    ctx.fillStyle = "#ffffff"
    ctx.fillText("갓겜은 물론 \"넷\"을 말하겠지?", canvas.width/2.5, canvas.height/3.5)
  
    ctx.font = applyText(canvas, `${msg.author.username}!`)
    ctx.fillStyle = '#ffffff';
    ctx.fillText(`${msg.author.username}!`, canvas.width / 2.5, canvas.height / 1.6);
  
  
  
    ctx.beginPath();
    ctx.arc(125,125,100,0,Math.PI*2,true)
    ctx.closePath()
    ctx.clip()
    
    const avatar = await Canvas.loadImage(msg.author.displayAvatarURL({format:"jpg"}))
    ctx.drawImage(avatar, 25,25,200,200)
    const attachment = new MessageAttachment(canvas.toBuffer(), 'welcome-image.png');
  
    msg.channel.send(attachment)
   }

   if(isMul(msg.content) && !msg.author.bot){
     const max = Math.ceil(msg.content.length + 5)
     const min = Math.floor(msg.content.length)
     const random = Math.floor(Math.random()*(max-min-1)+min)
     let result = ""
     for (let i = 0; i < random; i++) {
       result+="?"
     }
     msg.channel.send(result)
   }
});

client.login(process.env.TOKEN);
