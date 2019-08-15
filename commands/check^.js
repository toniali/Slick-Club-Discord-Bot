var Discord = require ("discord.js");
const client = new Discord.Client({disableEveryone: true});
const fs = require("fs")

module.exports.run = async message => {

  if(message.guild.member(client.user).hasPermission("ADMINISTRATOR")){
    return message.channel.send("This bot has administrator permissions!")
  } return message.channel.send("This bot does not have administrator permissions!")

    
}

module.exports.help = {
    name:"check"
}