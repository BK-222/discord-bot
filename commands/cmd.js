const cmd = {
  name: 'cmd',
  description: 'base cmd with other arguments' ,
  execute(msg, args) {
    if (!args.length) {
      return msg.channel.send(`Please input an argument, ${msg.author}`);
    } else if (args[0] == 'cat') {
      return msg.channel.send('Meow, meow');
    }
    msg.channel.send(`Command name: ${commandName} \nArguments: ${args}`);
  }
}

module.exports = cmd;