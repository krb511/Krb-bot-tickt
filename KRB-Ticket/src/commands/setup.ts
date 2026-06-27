import {

    SlashCommandBuilder,

    ChatInputCommandInteraction,

    PermissionFlagsBits

} from "discord.js";

export default {

    data: new SlashCommandBuilder()

        .setName("setup")

        .setDescription("Send Ticket Panel")

        .setDefaultMemberPermissions(

            PermissionFlagsBits.Administrator

        ),

    async execute(

        interaction: ChatInputCommandInteraction

    ) {

        await interaction.reply({

            content: "🚧 سيتم إنشاء لوحة التكت قريبًا.",

            ephemeral: true

        });

    }

}
