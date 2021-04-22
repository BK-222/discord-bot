const mute = {
  name: 'mute',
  descriptions: 'Mutes a user',
  execute(msg, args) {
    msg.channel.send(`Mute: ${msg.mentions.users.first().username}`);
  }
}

module.exports = mute;