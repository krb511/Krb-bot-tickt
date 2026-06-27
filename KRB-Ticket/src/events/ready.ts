import { Events, ActivityType } from "discord.js";

export default {

    name: Events.ClientReady,

    once: true,

    async execute(client: any) {

        console.clear();

        console.log("");

        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

        console.log("🤖 KRB Ticket Started");

        console.log(`👤 ${client.user.tag}`);

        console.log(`🌍 ${client.guilds.cache.size} Servers`);

        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

        client.user.setPresence({

            activities: [

                {

                    name: "KRB Ticket",

                    type: ActivityType.Watching

                }

            ],

            status: "online"

        });

    }

}
