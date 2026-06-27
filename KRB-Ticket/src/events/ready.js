const { ActivityType } = require("discord.js");

module.exports = {
    name: "ready",
    once: true,

    async execute(client) {

        console.clear();

        console.log("====================================");
        console.log(`🤖 Logged in as ${client.user.tag}`);
        console.log(`📡 Serving ${client.guilds.cache.size} Servers`);
        console.log("🚀 KRB Ticket System Started");
        console.log("====================================");

        client.user.setPresence({
            activities: [
                {
                    name: "KRB Ticket System",
                    type: ActivityType.Watching
                }
            ],
            status: "online"
        });

    }
};
