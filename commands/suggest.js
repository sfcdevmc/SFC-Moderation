const Discord = require('discord.js');
const moment = require('moment');

module.exports.run = async (client, message) => {
    let args = message.content.split(' ').slice(1).join(' ');
    message.delete();
    if (args.length < 1) {
        return message.reply(`You must give me something to Suggest first ${message.author}`);
    }

    let guild = message.guild;
    const cnl = client.channels.get('728287215863726132');
    message.reply(`Hey, ${message.author}, we got your Suggestion! You can see your full suggestion at: <#572925838463467555>!`);
    const embed = new Discord.RichEmbed()
  .setAuthor(`Suggestion from ${message.author.tag}`, message.author.displayAvatarURL)
  .addField('Suggestion:', `**Suggestion's Author:** ${message.author.tag}\n**Server:** ${guild.name}\n**Full Suggestion:** ${args}`)
  .setThumbnail(message.author.displayAvatarURL)
  .setColor("#ffd700");
    cnl.send({embed})
    .then(function (message) {
      message.react("✅")
      message.react("❎")
    }).catch(function(message) {
     });
};

module.exports.help = {
    name: 'Suggestion'
};