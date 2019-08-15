const discord = require('discord.js');

module.exports.run = async(message, bots, args) => {

    // const user = message.guild.member(message.mentions.users.first());
    // if(user){
    //     const member = message.guild.member(user);
    //     if(member){
    //         let muted = message.guild.roles.find(role => role.name == "muted")
    //         if(message.member.roles.has(`${muted.id}`)){
    //             member.removeRole(muted.id);
    //             return message.channel.send(`Successfully unmuted ${member}`)
    //         } else return message.channel.send('This user is already unmuted!')
    //     } else return message.channel.send('That user isn\'t in this guild!')
    // } else return message.channel.send('You didn\'t mention a user!')

            let usermember = message.guilds.guild.members.get(args[0]);
              if (checkauthortrustworthy(message)){
                if(!usermember) {
                    return message.channel.send("Couldn't find user.");
                } 
                var muterole = message.guild.roles.find(role => role.name === "muted");
                await(usermember.removeRole(muterole.id));
                message.channel.send(`${usermember} has been muted!`)
            }else{
              return messagechannelsendtrustworthy(message)
            }    

}

module.exports.help = {
    name:"unmute"
}