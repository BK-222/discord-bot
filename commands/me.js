const user = {
  name: 'user',
  description: `displays the user's name and id`,
  execute(msg) {
    msg.channel.send(`Forgot who you are, ${msg.author.username}??`);
    msg.channel.send(`Here's also your id #${msg.author.id}`);
  }
}

module.exports = user;