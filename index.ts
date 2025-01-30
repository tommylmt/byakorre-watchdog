import "dotenv/config";

import Bot from "./src/utils/bot";
import Scrapper from "./src/utils/scrapper";
import ApiChecker from "./src/utils/api";

const bot: Bot = new Bot();
const scrapper: Scrapper = new Scrapper();
const api: ApiChecker = new ApiChecker();

scrapper.crawl().then((data): void => {
    let minutes: number = new Date().getMinutes();
    const username: string = process.env.TELEGRAM_USERNAME;

    // If available or in the notification range
    if (data.isAvailable || [0, 30].includes(minutes)) {
        bot.photo(Scrapper.filePath, "ScreenShot Ikea");
        bot.post(
            data.isAvailable
                ? `✅ ${username} Byakorre is available : ` + data.link
                : `❌ ${username} Byakorre is not available in Ikea France`,
        );
    }

    // Notify store availability
    api.isAvailable().then(result => {
        const isAvailable: string = result.stock > 0 ? 'available' : 'unavailable';
        const restock: Date = new Date(result.restockDate);

        bot.post(
            `${result.stock > 0 ? '✅' : '❌'} ${username} Byakorre is *${isAvailable}* at ${result.store?.name}
*Quantity* : ${result.stock}
*Arrival date* : ${restock.toLocaleDateString('fr-FR')}
*Reason* : ${result.probability}
*Link* : [Byakorre](${data.link}) `,
            { parse_mode: 'MarkdownV2' }
        );

        // Ugly code, fast code
        setTimeout(() => {
            process.exit(0);
        }, 2000);
    })
});