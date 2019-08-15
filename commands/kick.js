const Discord = require ("discord.js");

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

    const user = message.mentions.users.first();
                  if (checkauthortrustworthy(message)){
                      if (user) {
                          const member = message.guild.member(user);
                              if (member) {
                          member.kick('Optional reason that will display in the audit logs').then(() => {
                            message.channel.send(`Successfully kicked ${user.tag}`);
                          }).catch(err => {
                            message.channel.send('I was unable to kick the member');
                          console.error(err);
                      });
                  } else {
                      message.channel.send('That user isn\'t in this guild!');
                  }
              } else {
                message.channel.send('You didn\'t mention the user to kick!')};
                  } else return messagechannelsendtrustworthy(message);

}

module.exports.help = {
    name:"kick"
}