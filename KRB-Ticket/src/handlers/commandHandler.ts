import fs from "fs";
import path from "path";

export default async (client: any) => {

    const commandsPath = path.join(__dirname, "../commands");

    const files = fs.readdirSync(commandsPath).filter(file =>
        file.endsWith(".ts") || file.endsWith(".js")
    );

    for (const file of files) {

        const command = (await import(path.join(commandsPath, file))).default;

        client.commands.set(command.data.name, command);

    }

};
