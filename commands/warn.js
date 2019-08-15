const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./commands/warnings.json", "utf8"));

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

//     let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
//     if(!checkauthortrustworthy(message)){ return messagechannelsendtrustworthy(message)}
//         if(!wUser){
//             return message.channel.reply('Couldn\'t find the User');
//         } 
//         let reason = args.join (" ").slice(22);
//          if(!warns[wUser.id]) warns[wUser.id] = {
//                         warns:0
//                             };
//         warns[wUser.id].warns++;

//         fs.writeFile("./commands/warnings.json", JSON.stringify(warns), (err) => {
//                 if(err) {
//                 console.log(err);
//                 }
                   
// });
//     return message.channel.send(`Successfully warned ${wUser}`);

        let wUser = message.guild.member(message.mentions.users.first()) || message.guild.member.get(args[0])
        if(checkauthortrustworthy(message)){
            if(!wUser){
                return message.channel.reply('Couldn\'t find the user');
            }
            let reason = args.join(" ").slice(22);
            if(!warns[wUser.id]) warns[wUser.id] = {
                warns:0
            };
            warns [wUser.id].warns++;
            fs.writeFile("./commands/warnings.json", JSON.stringify(warns), (err) => {
                if(err){
                    console.log(err);
                }
                return message.channel.send(`Successfully warned ${wUser}`)
            });
} return messagechannelsendtrustworthy(message)


}

module.exports.help = {
    name:"warn"
}