import puppeteer from 'puppeteer';

interface ViewPort {
    width: number,
    height: number
}

export default class Scrapper {
    async crawl() {
        const browser = await puppeteer.launch({
            executablePath: process.env.PUPPETEER_EXECUTABLE_PATH,
            args: ['--no-sandbox']
        });
        const page = await browser.newPage();
        await page.setViewport(this.viewport);
        await page.goto(this.target);
        await page.screenshot({path: Scrapper.filePath});

        const available: boolean = await page.evaluate((): boolean => {
            let selector = document.querySelector('.search-summary--zero');

            return !selector;
        });

        return new Promise((res: any, rej: any) => {
            res({
                isAvailable: available,
                link: this.target
            });
        });
    }

    public static get filePath(): string
    {
        return 'documents/screenshot.png';
    }

    private get viewport(): ViewPort {
        return { width: 1080, height: 1024};
    }

    private get target(): string {
        return process.env.WATCHDOG_URL;
    }
}