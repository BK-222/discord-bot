const server = {
  name: 'server',
  description: 'displays the server name',
  execute(msg) {
    msg.channel.send(msg.guild.name);
  }
}

module.exports = server;