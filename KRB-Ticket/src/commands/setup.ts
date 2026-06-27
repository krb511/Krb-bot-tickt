import {
    ChatInputCommandInteraction,
    PermissionFlagsBits,
    SlashCommandBuilder
} from "discord.js";

import { TicketPanel } from "../panels/ticketPanel";

export default {

    data: new SlashCommandBuilder()

        .setName("setup")

        .setDescription("إرسال لوحة التذاكر")

        .setDefaultMemberPermissions(
            PermissionFlagsBits.Administrator
        ),

    async execute(
        interaction: ChatInputCommandInteraction
    ) {

        if (!interaction.channel) return;

        await interaction.channel.send(
            TicketPanel()
        );

        await interaction.reply({

            content: "✅ تم إرسال لوحة التذاكر بنجاح.",

            ephemeral: true

        });

    }

};
