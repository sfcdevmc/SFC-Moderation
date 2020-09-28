const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "**You do not have the permission needed =>** `MANAGE_MESSAGES` **to perform this action :/**");
  message.delete();
  if(!args[0]) return message.channel.send("Please enter an amount of messages to purge displayed as integer.");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "purge"
}