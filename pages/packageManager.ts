import { Page } from "playwright";
import { HomePage } from "./homePage";
import { AandBPage } from "./aAndBPage";

export class PackageManager {
    private readonly page: Page
    private readonly homePage: HomePage
    private readonly aAndBPage: AandBPage

    constructor(page: Page) {
        this.page = page
        this.homePage = new HomePage(this.page)
        this.aAndBPage = new AandBPage(this.page)
    }

    onHomePage() {
        return this.homePage
    }

    async backToPreviusPage() {
        await this.page.goBack()
    }

    onAandBPage() {
        return this.aAndBPage
    }
}