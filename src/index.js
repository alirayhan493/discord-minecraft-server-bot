require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");
const {exec } = require("child_process");

const client = new Client ({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

const ALLOWED_USER_IDS = process.env.ALLOWED_USER_IDS.split(",");

client.once("ready", () => {
    console.log(` ✅ Logged in as ${client.user.tag}`)
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    if(!ALLOWED_USER_IDS.includes(message.author.id)) return;

    if (message.content ==="!ping") {
        message.reply("🏓 Bot is online.")
    }

    if (message.content === "!startserver") {
        message.reply("🟡 Start command not configured yet.")
    }
});

client.login(process.env.DISCORD_TOKEN)

