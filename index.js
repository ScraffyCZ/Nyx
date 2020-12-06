// REQUIRE
const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const { token, prefix } = require('./botconfig.json');

// bot
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  bot.commands.set(command.name, command)
}

// CONSOLE LOGS & STATUS
bot.once('ready', () => {
    console.log('=== Nexus is ready to use! ===');
    bot.user.setActivity('ALPHA', {type: "STREAMING", url: "https://twitch.tv/scraffycze"})
    .then(presence => console.log(`=== Activity set to ${presence.activities[0].name} ===`))
    .catch(console.error);
});

// WELCOME
bot.on('guildMemberAdd', member => {
const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
if (!channel) return;
const welcome = new Discord.MessageEmbed()
  .setTitle('Welcome')
  .setColor('0ffc03')
  .setDescription(`Vítej na serveru, ${member}!`);
channel.send(welcome);
});

// LEAVE
bot.on('guildMemberRemove', member => {
const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
if (!channel) return;
const welcome = new Discord.MessageEmbed()
  .setTitle('Leave')
  .setColor('ff0000')
  .setDescription(`Opustil nás ${member}!`);
channel.send(welcome);
});





// CMD HANDLER
bot.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = bot.commands.get(commandName) || bot.commands.find (cmd => cmd.aliases && cmd.aliases.includes(commandName));

  try {
    command.execute(message, args);
  }
  catch (error) {
    console.error(error);
    message.reply('Někde byla nalezena chyba! Kontaktujte prosím developera **●⬤ Scraffy ⬤●#0001**');
  }
})




bot.login(token);
