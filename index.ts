import "dotenv/config";
import Bot from "./src/utils/bot";
import Scrapper from "./src/utils/scrapper";
import ApiChecker from "./src/utils/api";

const bot: Bot = new Bot();
const scrapper: Scrapper = new Scrapper();
const api: ApiChecker = new ApiChecker();

scrapper.crawl().then((data): void => {
  let minutes: number = new Date().getMinutes();

  // If available or in the notification range
  if (data.isAvailable || [0, 30].includes(minutes)) {
    bot.photo(Scrapper.filePath, "ScreenShot Ikea");
    bot.post(
        data.isAvailable
            ? "✅ @tommylmt Byakorre est disponible : " + data.link
            : "❌ @tommylmt Byakorre n'est pas disponible sur Ikea France",
    );
  }

  // Notify store availability
  api.isAvailable().then(result => {
    const isAvailable: string = result.stock > 0 ? 'disponible' : 'indisponible';
    const restock: Date = new Date(result.restockDate);

    bot.post(
      `${result.stock > 0 ? '✅' : '❌'} @tommylmt Byakorre est *${isAvailable}* à ${result.store?.name}
*Quantité* : ${result.stock}
*Date arrivée* : ${restock.toLocaleDateString('fr-FR')}
*Raison* : ${result.probability}
*Lien* : [Byakorre](${process.env.WATCHDOG_URL}) `,
      { parse_mode: 'MarkdownV2' }
    );

    setTimeout(() => {
      process.exit(0);
    }, 2000);
  })
});