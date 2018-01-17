const Discord = require('discord.js');
const client = new Discord.Client();
let date = new Date();

client.on('ready', () => {
    console.log("-------------------PRIVATE-MESSAGE-LOADED---------------")
    console.log("Bot name: " + client.user.username + " --On Date: " + date)
    console.log("Send Message '<dspm @user text'")
});
var prefix = "<";

client.on('message', message => {
    var channel = client.channels.get('402946843958444053');
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    var chann = client.channel;
    if (command === "dspm") {
        message.delete();
        var ms2 = "900";
        var ar1 = args.join(" ")
        ar1.replace("<dspm", " ")
        message.channel.send("Starting-spamming...Service offert by ReF vBeta")
        let userToSend1 = message.mentions.users.first();
        console.log("-------------------------SEND-SPAM-DM-MESSAGE--------------------------")
        console.log("Message started by: " + client.user.username)
        console.log("Send dm message to: " + userToSend1)
        const embed = new Discord.RichEmbed()
            .setAuthor("ALERT-SPAM-DM", "https://i.imgur.com/7haeZPE.png")
            .setColor("0x" + (Math.random() * 0xFFFFFF << 0).toString(16))
            .setDescription("Spamming to: " + userToSend1)
            .addField("--TESTO--", "Testo-spammato: " + ar1)
            .addField("--DATA-- ", "On Date: " + date)
        channel.sendMessage({
            embed
        });
        var r = setInterval(function() {
            ar1.replace(userToSend1, " ")
            userToSend1.send(ar1);
        }, ms2);
        setTimeout(function(){
            clearInterval(r);
        }, 40000);
    }
});
client.login(process.env.BOT_TOKEN);
