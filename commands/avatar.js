const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("../config.json");

client.config = config;

exports.run = (client, message) => {
    message.channel.send(message.author.displayAvatarURL);
}

module.exports.help = {
    name: "avatar"
}