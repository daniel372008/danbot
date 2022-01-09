const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == ";p"){
        message.reply("@above all he just did it")
    }
})

client.on("messageCreate", (message) => {
    if (message.content == "nigga"){
        message.reply("no racism")
    }
})

client.login(process.env.TOKEN)