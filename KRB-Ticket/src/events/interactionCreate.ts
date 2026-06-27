import {
    Events,
    Interaction
} from "discord.js";

export default {

    name: Events.InteractionCreate,

    async execute(interaction: Interaction) {

        const client: any = interaction.client;

        if (interaction.isChatInputCommand()) {

            const command = client.commands.get(interaction.commandName);

            if (!command) return;

            try {

                await command.execute(interaction);

            } catch (err) {

                console.error(err);

            }

        }

        if (interaction.isButton()) {

            const button = client.buttons.get(interaction.customId);

            if (!button) return;

            await button.execute(interaction);

        }

        if (interaction.isStringSelectMenu()) {

            const menu = client.menus.get(interaction.customId);

            if (!menu) return;

            await menu.execute(interaction);

        }

        if (interaction.isModalSubmit()) {

            const modal = client.modals.get(interaction.customId);

            if (!modal) return;

            await modal.execute(interaction);

        }

    }

}
