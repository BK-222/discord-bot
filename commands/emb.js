const emb = {
  name: 'emb',
  description: 'base emb with other arguments',
  execute(msg, args) {
    if (!args.length) {
      let embed = new Discord.MessageEmbed()
        .setColor('#ffffff')
        .setTitle('ERROR')
        .setDescription('Nothing here')
        .setFooter('Error log')
        .addField('Code', 'Greetings!', false)
        .addFields(
          { name: 'Shannon', value: 'servant', inline: false },
          { name: 'Kannon', value: 'servant', inline: false }
        )
        .setTimestamp()
        .setImage('https://imgur.com/a/lAetrF1')
        .setThumbnail('https://imgur.com/a/lAetrF1')
      return msg.channel.send(embed);
    } else if (args[0] == 'None') {
      return msg.channel.send('Crickets.');
    }
    msg.channel.send(`Command name: ${args.length} \nArguments: ${args}`);
  }
}

module.exports = emb;