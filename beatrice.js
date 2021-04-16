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
  
  if (!message.startsWith(PREFIX) || msg.author.bot) return;
  
  let args = msg.content.trim().split(/ +/);
  let command = args.shift().toLowerCase();
  
  if (command == `${PREFIX}cmd`) {
    if (!args.length) {
      return msg.channel.send(`Please input an argument, ${msg.author}`);
    } else if (args[0] == 'cat') {
      return msg.channel.send('Meow, meow');
    }
    msg.channel.send(`Command name: ${command} /nArguments: ${args}`);
  } else if (command == `${PREFIX}mute`) {
    let mentionedUser = message.mentions.users.first();
    msg.channel.send(`Mute: ${mentionedUser.username}`);
    return;
  }
 
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
