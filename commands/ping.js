const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    description: "Zjištění pingu",
    execute(message, args){
      const ping = message.createdTimestamp - message.createdTimestamp;
      const help = new Discord.MessageEmbed()
      .setDescription(`Můj ping je **${ping} ms**!`)
      .setColor('RANDOM')

      message.reply(help)
    }
}
