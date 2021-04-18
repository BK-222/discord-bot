const me = {
  name: 'me',
  description: 'displays the user\'s name and id',
  execute(msg) {
    msg.channel.send(`Forgot your name, ${msg.author.username}??`);
    msg.channel.send(`Here's also your id #${msg.author.id}`);
  }
}

module.exports = me;