import { Page } from "playwright";
import { HomePage } from "./homePage";

export class PackageManager {
    private readonly page: Page
    private readonly homePage: HomePage

    constructor(page: Page) {
        this.page = page
        this.homePage = new HomePage(this.page)
    }

    onHomePage() {
        return this.homePage
    }

    async backToPreviusPage() {
        await this.page.goBack()
    }
}