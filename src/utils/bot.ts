import { Telegraf, Input } from 'telegraf'

export default class Bot {
    telegraf: Telegraf;

    constructor() {
        this.telegraf = new Telegraf(this.apiKey);
        this.telegraf.launch();
    }

    private get apiKey(): string  {
        return process.env.TELEGRAM_BOT_TOKEN;
    }

    private get channelId(): string {
        return process.env.TELEGRAM_CHAT_ID;
    }

    public post(message: string): void {
        this.telegraf.telegram.sendMessage(this.channelId, message)
    }

    public photo(path: string, filename: string): void
    {
        this.telegraf.telegram.sendPhoto(this.channelId, Input.fromLocalFile(path, filename));
    }
}