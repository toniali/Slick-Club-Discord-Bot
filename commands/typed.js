const discord = require('discord.js');
const botconfig = require('../botconfig.json')
let prefix = botconfig.prefix

module.exports.run = async (bots, message, args) => {

    var say = message.content.substr(prefix.length+6)
              message.delete()
              message.channel.send(say)

}

module.exports.help = {
    name:"typed"
}