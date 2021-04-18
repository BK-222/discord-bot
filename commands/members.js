const members = {
  name: 'members',
  description: 'displays the number of members on the server',
  execute(msg) {
    msg.channel.send(`There are ${msg.guild.memberCount} people on this island!`)
  }
}

module.exports = members;