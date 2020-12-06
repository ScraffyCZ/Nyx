const Discord = require('discord.js');

module.exports = {
    name: 'testhelp',
    description: "Testovací help příkaz",
    execute(message, args){

      const testhelp = new Discord.MessageEmbed()
      .setTitle('HELP')
      .setDescription('**Můj prefix pro tento server je: `/`**')
      .addField('Informations', '`ping`', false)
      .addField('Administrators', '`say` | `embed`', false)
      .setColor('RANDOM')

      message.reply(testhelp)
    }
}
