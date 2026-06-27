import fs from "fs";
import path from "path";

export default async (client: any) => {

    const events = path.join(__dirname, "../events");

    const files = fs.readdirSync(events).filter(f => f.endsWith(".ts") || f.endsWith(".js"));

    for (const file of files) {

        const event = (await import(path.join(events, file))).default;

        if (event.once) {

            client.once(event.name, (...args: any[]) => event.execute(...args));

        } else {

            client.on(event.name, (...args: any[]) => event.execute(...args));

        }

    }

}
