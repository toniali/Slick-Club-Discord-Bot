const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    let user = message.guild.member(message.mentions.member) || message.guild.member(args[0]);
    if(user){
        let ID = user.ID;
        return message.channel.send(`${user} = ${ID}`)
    }
    let author = message.author
    if(author){
        let author = message.author;
        let authorID = message.author.ID;
        return message.channel.send(`${author} = ${authorID}`)
    }

}

module.exports.help = {
    name: "user"
}