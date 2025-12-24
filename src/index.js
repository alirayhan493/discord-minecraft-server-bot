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

const ALLOWED_USER_IDS = process.env.ALLOWED_USER_IDS
  ? process.env.ALLOWED_USER_IDS.split(",")
  : [];

client.once("clientReady", () => {
    console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    if(!ALLOWED_USER_IDS.includes(message.author.id)) return;

    const content = message.content.trim().toLowerCase();

    if (message.content ==="!ping") {
        message.reply("🏓 Bot is online.")
    }

    if (content === "!startserver") {
    exec(process.env.START_COMMAND, (error, stdout, stderr) => {
        if (error) {
            console.error(error);
            message.reply("❌ Failed to start the server.");
            return;
        }
        console.log(stdout); // logs fake server messages
        message.reply("🟢 Minecraft server starting...");
    });
}
});

client.login(process.env.DISCORD_TOKEN)