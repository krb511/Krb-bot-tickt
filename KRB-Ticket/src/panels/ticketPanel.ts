import {
    ActionRowBuilder,
    EmbedBuilder,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder
} from "discord.js";

import config from "../../config.json";

export function TicketPanel() {

    const embed = new EmbedBuilder()

        .setColor(config.color as `#${string}`)

        .setTitle("🎫 نظام تذاكر KRB")

        .setDescription(`
# أهلاً بك 👋

مرحبًا بك في **نظام تذاكر KRB**.

يرجى اختيار القسم المناسب من القائمة بالأسفل،
وسيتم إنشاء تذكرة خاصة بك تلقائيًا.

### ✨ مميزات النظام

> ⚡ سرعة في الرد.

> 🔒 خصوصية كاملة.

> 🛡️ دعم احترافي.

> 📩 متابعة حتى انتهاء الطلب.

> ❤️ نتمنى لك تجربة رائعة.
`)

        .setImage(config.banner)

        .setFooter({
            text: config.footer
        })

        .setTimestamp();

    const menu = new StringSelectMenuBuilder()

        .setCustomId("ticket-menu")

        .setPlaceholder("📂 اختر نوع التذكرة...")

        .addOptions(

            new StringSelectMenuOptionBuilder()

                .setLabel("الدعم الفني")

                .setDescription("المساعدة في المشاكل")

                .setEmoji("🎧")

                .setValue("support"),

            new StringSelectMenuOptionBuilder()

                .setLabel("الشراء")

                .setDescription("شراء خدمة أو منتج")

                .setEmoji("💰")

                .setValue("buy"),

            new StringSelectMenuOptionBuilder()

                .setLabel("البرمجة")

                .setDescription("طلبات البرمجة")

                .setEmoji("💻")

                .setValue("development"),

            new StringSelectMenuOptionBuilder()

                .setLabel("الإبلاغ")

                .setDescription("الإبلاغ عن عضو")

                .setEmoji("🚨")

                .setValue("report"),

            new StringSelectMenuOptionBuilder()

                .setLabel("أخرى")

                .setDescription("أي استفسار آخر")

                .setEmoji("❓")

                .setValue("other")

        );

    const row =
        new ActionRowBuilder<StringSelectMenuBuilder>()

            .addComponents(menu);

    return {

        embeds: [embed],

        components: [row]

    };

}
