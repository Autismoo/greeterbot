const DiscordInit = require('discord.js');
const bot = new DiscordInit();

bot.on('ready', () => {
    console.log('Greeter bot test!');
});

bot.on('guildMemberAdd', member => {
    member.guild.channels.find('name', 'general').send('Welcome ' + member.user.username + ' to ' + member.guild.name + '!');
});

bot.on('guildMemberRemove', member => {
    member.guild.channels.find('name', 'general').send('Goodbye ' + member.user.username + '!');
});

bot.login('token');