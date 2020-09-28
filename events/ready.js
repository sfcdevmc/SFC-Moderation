module.exports = (client) => {
    console.log(`${client.user.username} is ready to serve in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'sfcworld.ml | $help',
            type: "PLAYING",
        }
    });
}
