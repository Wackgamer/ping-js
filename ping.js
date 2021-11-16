const Discord = require("discord.js")

module.exports = {
	help: {
		alias:[]
	},
	run:async (client, message, args) => {
		 message.reply(`🌐 Latency is **${Date.now() - message.createdTimestamp}**ms. 🌐. ☁️ API latency is **${Math.round(client.ws.ping)}**ms ☁️.`);
	}
}
