import "dotenv/config";

import {
    Client,
    GatewayIntentBits,
    Partials,
    Collection
} from "discord.js";

const client = new Client({

    intents: [

        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent

    ],

    partials: [

        Partials.Channel,
        Partials.Message,
        Partials.User,
        Partials.GuildMember

    ]

});

(client as any).commands = new Collection();

client.once("ready", () => {

    console.clear();

    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("🤖 KRB Ticket Started");
    console.log(`👤 ${client.user?.tag}`);
    console.log(`🌐 ${client.guilds.cache.size} Servers`);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━");

});

client.login(process.env.TOKEN);
