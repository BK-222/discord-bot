require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE']
});

client.on('ready', () => {
  console.log('The bot is ready to go!');
});

client.on('message', (msg) => {
  let sent = msg.content.toLowerCase();
  
  if (sent == 'blonde') {
    msg.channel.send('And bouncy!');
    //msg.reply('And bouncy!');
  }
  if (sent == 'I love Beato!') {
    msg.react('❤️');
  }
});

client.on('messageDelete', (msg) => {
  msg.channel.send('Uuuuuuuuuu, what are you hiding??');
});

client.login(process.env.BOT_TOKEN);
