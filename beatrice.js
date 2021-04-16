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
});

client.on('message', (msg) => {
  
  if (!message.startsWith(PREFIX) || msg.author.bot) return;
  
  //let args = msg.content.slice(PREFIX.length).trim().split(' ');
  //let command = args.shift().toLowerCase();
  
  
 
  if (command == `${PREFIX}server`) {
    msg.channel.send(msg.guild.name);
  }
  else if (command == `${PREFIX}members`) {
    msg.channel.send(`There are ${msg.guild.memberCount} people on this island!`);
  }
  else if (command == `${PREFIX}me`) {
    msg.channel.send(`Forgot your name, ${msg.author.username}??`);
    msg.channel.send(`Here's also your id #${msg.author.id}`);
  }
});

client.on('messageDelete', (msg) => {
  //msg.channel.send('Uuuuuuuuuu, what are you hiding??');
  client.commands.get('deleted-message').execute(msg);
});

client.login(process.env.BOT_TOKEN);
