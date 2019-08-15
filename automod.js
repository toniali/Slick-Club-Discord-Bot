const Discord = require('discord.js');
const config = require('dotenv').config();
const tokenfile = process.env.token;
const bot = new Discord.Client({disableEveryone: true});

bot.on("message", async message => {

    if(message.content === '5' ){
        let muterole = message.guild.roles.find(role => role.name === "muted")
        if(!muterole){
            message.guild.createRole({
                name:"muted",
                color:"17D3CE",
                permissions:[]
            });
        } await(message.member.addRole(muterole.id))

    }

});

bot.login(tokenfile)