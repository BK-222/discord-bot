const deletedMessage = {
  name: 'deleted-message',
  description: 'playful response to the deleted message',
  execute(msg) {
    msg.channel.send('Uuuuuuuuuu, what are you hiding??');
  }
}

module.exports = deletedMessage;