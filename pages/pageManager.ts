import { Page } from "playwright";
import { HomePage } from "./homePage";
import { AandBPage } from "./aAndBPage";
import { AddRemovePage } from "./addRemovePage";
import { BasicAuthPage } from "./basicAuth";

export class PageManager {
    private readonly page: Page
    private readonly homePage: HomePage
    private readonly aAndBPage: AandBPage
    private readonly addRemovePage: AddRemovePage
    private readonly basicAuthPage: BasicAuthPage

    constructor(page: Page) {
        this.page = page
        this.homePage = new HomePage(this.page)
        this.aAndBPage = new AandBPage(this.page)
        this.addRemovePage = new AddRemovePage(this.page)
        this.basicAuthPage = new BasicAuthPage(this.page)
    }

    async backToPreviusPage() {
        await this.page.goBack()
    }

    onHomePage() {
        return this.homePage
    }

    onAandBPage() {
        return this.aAndBPage
    }

    onAddRemovePage() {
        return this.addRemovePage
    }

    onBasicAuthPage() {
        return this.basicAuthPage
    }
}