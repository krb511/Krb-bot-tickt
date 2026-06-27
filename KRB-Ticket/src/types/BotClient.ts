import {
    Client,
    Collection
} from "discord.js";

export interface BotClient extends Client {

    commands: Collection<any, any>;

    buttons: Collection<any, any>;

    menus: Collection<any, any>;

    modals: Collection<any, any>;

}
