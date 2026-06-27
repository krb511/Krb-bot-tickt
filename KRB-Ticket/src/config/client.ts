import {
    Client,
    Collection,
    GatewayIntentBits,
    Partials
} from "discord.js";

export const client = new Client({

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
(client as any).buttons = new Collection();
(client as any).menus = new Collection();
(client as any).modals = new Collection();
