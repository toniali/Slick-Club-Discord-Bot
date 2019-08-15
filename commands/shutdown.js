const discord = require('discord.js');
let bot = new discord.Client({disableEveryone: true});

module.exports.run = async (bots, message, args) => {

    if(message.author.id === "572512230701006851"){
        try {
            await message.channel.send(`Slick Club Bot is shutting down...`);
            process.exit()
        } catch(error) {
            message.channel.send(`Error: ${error.message}`);
        }
    } return;

}

module.exports.help = {
    name:"shutdown"
}