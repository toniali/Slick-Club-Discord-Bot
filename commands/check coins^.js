const Discord = require("discord.js");
const fs = require("fs")
const ms = require("ms")
let coins = fs.readFileSync("./commands/coins.json", "utf8")

module.exports.run = async (bot, message, args) => {

    let wUser = message.guild.member(message.mentions.member) || message.guild.member(args[0]);
    let member = message.mentions.member
    let userID = message.mentions.member
    let userData = JSON.parse(fs.readFileSync("./commands/coins.json", "utf8"))
    // if(coins[message.author.id]) coins[message.author.id] = {
    //     coins: 0
    // } 
    if(userData){
        let coins = new Discord.RichEmbed()
        .setDescription("Balance")
        .setColor("RANDOM")
        .addField("Testing")
    }
}

module.exports.help = {
    name:"coins"
}