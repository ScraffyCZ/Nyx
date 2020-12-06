const Discord = require('discord.js');


module.exports = {
    name: 'embed',
    description: "Psaní přes bota pomocí embed",
    execute(message, args){
        message.delete().catch(err => console.log(err));
        const embedDescription = args.slice(0).join(' ');

        const embedSay = new Discord.MessageEmbed()
        .setDescription(embedDescription)
        .setColor('RANDOM')

        message.reply(embedSay)
    }
}
