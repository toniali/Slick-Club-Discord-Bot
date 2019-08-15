module.exports.run = async (message, bots, args) => {

    message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true,
        ADD_REACTIONS: null
    });

    message.channel.send(`Successfully unmuted ${message.channel}`)

}

module.exports.help = {
    name:"unlock"
}