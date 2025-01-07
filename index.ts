import 'dotenv/config'
import Bot from "./src/utils/bot";
import Scrapper from "./src/utils/scrapper";

const bot: Bot = new Bot();
const scrapper: Scrapper = new Scrapper();

scrapper.crawl().then((data): void => {
    bot.photo(Scrapper.filePath, 'ScreenShot Ikea');
    bot.post(data.isAvailable
        ? '✅ Byakorre est disponible : ' + data.link
        : '❌ Byakorre n\'est pas disponible sur Ikea France'
    );

    setTimeout(() => { process.exit(0) }, 2000);
});