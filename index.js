const webhook = require("webhook-discord") 
const Hook = new webhook.Webhook("") // A sua webhook

// Self Bot
const Discord = require("discord.js-selfbot");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in ${client.user.username}`)
})

client.on("message", msg => {
	if (msg.channel.type == "text") {
		if (msg.guild.id === "") { // ID do server
			if (msg.channel.id == "") { // ID do canal
				Hook.info("CX3", msg.content) // Nome na webhook
			}
		}
	}
});

client.login(""); // Token da sua conta do Discord
