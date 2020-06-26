const { Client, MessageAttachment } = require("discord.js");
const dotenv = require("dotenv");
dotenv.config();

const PREFIX = "!";
const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
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
    default:
      break;
  }
  if (msg.content === `${PREFIX}test`) {
    msg.react("720977034246881302");
  }
});
client.login(process.env.TOKEN);
