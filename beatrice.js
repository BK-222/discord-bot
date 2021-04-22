require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client({
  partials: ['MESSAGE']
});
client.commands = new Discord.Collection();

const cmd = require('./commands/cmd.js');
const server = require('./commands/server.js');
const members = require('./commands/members.js');
const user = require('./commands/me.js');
const deletedMessage = require('./commands/deletedMessage.js');

client.commands.set(cmd.name, cmd);
client.commands.set(server.name, server);
client.commands.set(members.name, members);
client.commands.set(user.name, user);
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
  
  let args = msg.content.slice(PREFIX.length).trim().split(/ +/);
  let commandName = args.shift().toLowerCase();
  
  if (!client.commands.has(commandName)) return;
  let command = client.commands.get(commandName);
  
  if (command == `cmd`) {
    //client.commands.get('cmd').execute(msg, args);
    if (!args.length) {
      return msg.channel.send(`Please input an argument, ${msg.author}`);
    } else if (args[0] == 'cat') {
      return msg.channel.send('Meow, meow');
    }
    msg.channel.send(`Command name: ${command} \nArguments: ${args}`);
  } else if (command == `${PREFIX}mute`) {
    let mentionedUser = msg.mentions.users.first();
    msg.channel.send(`Mute: ${mentionedUser.username}`);
    return;
  }
 
  if (command == `server`) {
    client.commands.get(command).execute(msg);
  }
  else if (command == `${PREFIX}members`) {
    client.commands.get('members').execute(msg);
  }
  else if (command == `${PREFIX}user`) {
    client.commands.get('user').execute(msg);
  }
});

client.on('messageDelete', (msg) => {
  //msg.channel.send('Uuuuuuuuuu, what are you hiding??');
  client.commands.get('deleted-message').execute(msg);
});

client.login(process.env.BOT_TOKEN);
