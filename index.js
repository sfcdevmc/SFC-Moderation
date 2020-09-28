const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");

const client = new Discord.Client();
const config = require("./config.json");

client.config = config;

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
  });

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`${commandName} Has been fully loaded and setup!`);
    client.commands.set(commandName, props);
  });
});

client.on("message", (message) => {
    if (message.content.startsWith(config.prefix + "help")) {
        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Help",
            url: "https://www.youtube.com/watch?v=0FhCdoKmfEY",
            description: "This is the help page for this bot to show all of it's great and glorious commands!",
            fields: [{
                name: config.prefix + "help",
                value: "Brings you to this page!"
              },
              {
                name: config.prefix + "rps <rock, paper, or scissors",
                value: "Play Rock Paper Scissors with an AI!"
              },
              {
                name: config.prefix + "report <user> <reason>",
                value: "Sends the report of the user with the specified reason to the admins!"
              },
              {
                name: config.prefix + "ticket <problem>",
                value: "Creates a ticket that gets sent straight to the admins!"
              },
              {
                name: config.prefix + "serverinfo",
                value: "Shows the info of the server!"
              },
              {
                name: config.prefix + "avatar",
                value: "Shows your avatar!"
              },
              {
                name: config.prefix + "botinfo",
                value: "Shows the info of the bot!"
              },
              {
                name: config.prefix + "ping",
                value: "Shows the latency of the bot!"
              },
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© KKKBot 2020"
            }
          }
        });
    }
    /*
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return errors.noPerms(message, "**You do not have the permission needed =>** `MANAGE_MESSAGES` **to perform this action :/**");
  message.delete();
    */
    if (message.member.hasPermission("MANAGE_MESSAGES") && message.content.startsWith(config.prefix + "staffhelp")) {
        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Staff Help",
            url: "https://www.youtube.com/watch?v=0FhCdoKmfEY",
            description: "This is the staff help page for this bot to show all of it's great and glorious commands!",
            fields: [{
                name: config.prefix + "staffhelp",
                value: "Brings you to this page!"
              },
              {
                name: config.prefix + "kick <user> <reason>",
                value: "Kicks the specified user with the inputted reason."
              },
              {
                name: config.prefix + "ban <user> <reason>",
                value: "Bans the specified user with the inputted reason."
              },
              {
                name: config.prefix + "warn <user> <reason>",
                value: "Sends a DM to the specified user with the reason why they have been warned."
              },
              {
                name: config.prefix + "purge <amount>",
                value: "Deletes the number of messages you put inside <amount>!"
              },
              {
                name: config.prefix + "reload <commandName>",
                value: "Reloads the commands the bot has to work more efficiently! (owner only)"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© KKKBot 2020"
            }
          }
        });
    }
    if (message.content === config.prefix + "ping"){
        message.channel.send('pong !').then(m => m.edit(`${message.author}:ping_pong: Pong! (Current latency is ${m.createdTimestamp - message.createdTimestamp}ms, while the API Latency is ${Math.round(client.ping)}ms)`) );
    }
  });
  client.on('message', msg => {
    const args = msg.content.slice(config.prefix.length).split(' ');
    const command = args.shift().toLowerCase();
    
    });

    client.on("error", (e) => console.error(e));
    client.on("warn", (e) => console.warn(e));
    client.on("debug", (e) => console.info(e));
    
client.login(config.token);