import "dotenv/config";

import {
    REST,
    Routes,
    SlashCommandBuilder
} from "discord.js";

const commands = [

    new SlashCommandBuilder()

        .setName("setup")

        .setDescription("Create Ticket Panel")

].map(cmd => cmd.toJSON());

const rest = new REST({

    version: "10"

}).setToken(process.env.TOKEN!);

(async () => {

    try {

        console.log("Registering Commands...");

        await rest.put(

            Routes.applicationGuildCommands(

                process.env.CLIENT_ID!,

                process.env.GUILD_ID!

            ),

            {

                body: commands

            }

        );

        console.log("Commands Registered.");

    } catch (err) {

        console.error(err);

    }

})();
