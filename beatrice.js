require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE']
});
client.commands = new Discord.Collection();

const deletedMessage = require('./commands/deletedMessage.js');
client.commands.set(deletedMessage.name, deletedMessage);

const PREFIX = '$';

client.on('ready', () => {
  console.log('The bot is ready to go!');
});

client.on('message', (msg) => {
  let message = msg.content.toLowerCase();
  
  if (message == 'blonde') {
    msg.channel.send('And bouncy!');
    //msg.reply('And bouncy!');
  }
  if (message == 'i love beato!') {
    msg.react('❤️');
  }
  if (message == `${PREFIX}server`) {
    msg.channel.send(msg.guild.name);
  }
});

client.on('messageDelete', (msg) => {
  //msg.channel.send('Uuuuuuuuuu, what are you hiding??');
  client.commands.get('deleted-message').execute(msg);
});

client.login(process.env.BOT_TOKEN);
