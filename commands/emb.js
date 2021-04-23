const emb = {
  name: 'emb',
  description: 'Base emb with other arguments',
  execute(msg, args) {
    if (!args.length) {
      let embed = new Discord.MessageEmbed()
        //.setColor('#ffffff')
        //.setTitle('ERROR')
        //.setDescription('Nothing here')
        //.setFooter('Error log')
        //.addField('Code', 'Greetings!', false)
        //.addFields(
          //{ name: 'Shannon', value: 'servant', //inline: false },
          //{ name: 'Kannon', value: 'servant', //inline: false }
        //)
        //.setTimestamp()
        //.setImage('https://imgur.com/a/lAetrF1')
        //.setThumbnail('https://imgur.com/a/lAetrF1');
      return msg.channel.send(`test`);
    } else if (args[0] == 'none') {
      return msg.channel.send('Crickets.');
    }
    msg.channel.send(`Number of arguments: ${args.length} \nArguments: ${args}`);
  }
}

module.exports = emb;