const Discord = require("discord.js");
const fs = require("fs")
const ms = require("ms")
let warns = JSON.parse(fs.readFileSync("./commands/warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
    // let warns = JSON.parse(fs.readFileSync("./commands/warnings.json", "utf8"));
    // let user = message.mentions.members.first();

    // console.log ("**user=" + user);
    // if(user){
    //     var data = fs.readFileSync("./commands/warnings.json");
    //     var json = JSON.parse(data);

    //     // var data = {
    //     //     "1111-1111-1111" : {
    //     //       "Email": "test@test.com"
    //     //     }
    //     //   };
          
    //     //   //get by key
    //     //   var key = "1111-1111-1111";
    //     //   var oneOneOne = data[key];
          
    //     //   oneOneOne.Email //test@test.com
    //     //   console.log (oneOneOne.Email)

    //     let userid = user.id
    
    //     return message.channel.send(`${user.displayName} has ${json[userid].warns} warning`)


    // } else if (user == undefined){
    //     return message.channel.send("user is missing.")
    // } else{

    //     let authorID = message.author.id;
    //     var data = fs.readFileSync("./commands/warnings.json");
    //     var json = JSON.parse(data);
    //     let userid = message.author.id
    //     return message.channel.send(`***${user.displayName} has ${json[authorID].warns} warning`)
    //  }
 
    /////////////////////////////////
    
    let user = message.mentions.members.first();
    if(user){
        var data = fs.readFileSync("./commands/warnings.json");
        var json = JSON.parse(data);
        let userid = user.id;
        return message.channel.send(`${user.displayName} has ${json[userid].warns} warnings`);
    }   var data = fs.readFileSync("./commands/warnings.json");
        var json = JSON.parse(data);
        let author = message.author
        let authorid = message.author.id;
        if(author === undefined){
            return message.channel.send('Sorry, something went wrong')
        }
        return message.channel.send(`${author.username} has ${json[authorid].warns} warnings`)

}


module.exports.help = {
    name:"warnings"
}