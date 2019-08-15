const Discord = require("discord.js");

function checkauthortrustworthy(message){
    if (message.author.id == '572512230701006851'|| message.author.id == '362765857392427009' || message.author.id == '568630127483682818' || message.author.id == '593190422000435228'){
      return true;}
    else return false;}
    
    function checkauthorgodlytrustworthy(message){
      if (message.author.id == '572512230701006851' || message.author.id == '568630127483682818' ){
        return true;}
      else return false;}
    
      function messagechannelsendtrustworthy(message){
        message.channel.send('Slick has not given you __authorization level: trustworthy__ to use this command')
      }

module.exports.run = async (bot, message, args) => {

    let usermember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
              if (checkauthortrustworthy(message)){
              if(!usermember) {
                return message.channel.send("Couldn't find user.");
              } 
              var muterole = message.guild.roles.find(role => role.name === "muted");
              if(!muterole){
                try{
                  muterole = await message.guild.createRole({
                    name: "muted",
                    color: "6BBCF3",
                    permissions: []
                  }) 
                  message.guild.channels(async (channel, id) => {
                    await channel.overwritePermissions(muterole, {
                      SEND_MESSAGES: false,
                      ADD_REACTIONS: false
                    });
                  })
                }catch(e){
                  console.log(e.stack)
                }
              }
              await(usermember.addRole(muterole.id));
              message.channel.send(`${usermember} has been muted!`)
            }else{
              return messagechannelsendtrustworthy(message)
            }

              
}

module.exports.help = {
    name:"mute"
}