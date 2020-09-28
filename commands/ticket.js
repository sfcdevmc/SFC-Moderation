const Discord = require('discord.js');
const moment = require('moment');

const cooldown = new Set();
module.exports.run = async (client, message) => {
    let args = message.content.split(' ').slice(1).join(' ');
    message.delete();
    if (cooldown.has(message.author.id && message.guild.id)) {
        return message.reply('**[COOLDOWN]** Sending tickets has **1 Minute** Cooldown!');
    }
    if (args.length < 1) {
        return message.reply(`You must give me something to Ticket first ${message.author}`);
    }

    cooldown.add(message.author.id && message.guild.id);
    setTimeout(() => {
        cooldown.delete(message.author.id && message.guild.id);
    }, 60,000);
    let guild = message.guild;
    const cnl = client.channels.get('728287107071606915');
    message.reply(`Hey, ${message.author}, we got your Ticket! We will reply soon as possible! Here is the full ticket:`);
    const embed2 = new Discord.RichEmbed()
  .setAuthor(`Ticket from ${message.author.tag}`, message.author.displayAvatarURL)
  .addField('Ticket:', `**Tickets's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full ticket:** ${args}`)
  .setThumbnail(message.author.displayAvatarURL)
  .setFooter(`${moment().format('MMMM Do YYYY, h:mm:ss a')}`)
  .setColor(16711728);
    message.channel.send({embed: embed2});
    const embed = new Discord.RichEmbed()
  .setAuthor(`Ticket from ${message.author.tag}`, message.author.displayAvatarURL)
  .addField('Ticket:', `**Ticket's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full Ticket:** ${args}`)
  .setThumbnail(message.author.displayAvatarURL)
  .setColor("#ffd700");
    cnl.send({embed})
  .catch(e => logger.error(e))
};

module.exports.help = {
    name: 'Ticket'
};