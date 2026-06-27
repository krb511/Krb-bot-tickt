import "dotenv/config";

import { client } from "./config/client";

import loadEvents from "./handlers/eventHandler";
import loadCommands from "./handlers/commandHandler";

(async () => {

    try {

        await loadCommands(client);

        await loadEvents(client);

        await client.login(process.env.TOKEN);

    } catch (error) {

        console.error(error);

    }

})();
