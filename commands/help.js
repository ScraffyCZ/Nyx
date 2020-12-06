const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: "Pomocný příkaz se všemi commandy",
    execute(message, args){

      const help = new Discord.MessageEmbed()
      .setDescription('Bot is under **developing**!\nFor more questions, please contact **●⬤ Scraffy ⬤●#0001**!')
      .setColor(color)

      message.reply(help)
    }
}
