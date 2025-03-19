import { Page } from "playwright";
import { HomePage } from "./homePage";
import { AandBPage } from "./aAndBPage";
import { AddRemovePage } from "./addRemovePage";
import { BasicAuthPage } from "./basicAuth";
import { BrokenImagesPage } from "./brokenImages";
import { ChallengingDomPage } from "./challengingDomPage";
import { CheckboxesPage } from "./checkboxesPage";
import { ContextMenuPage } from "./contextMenuPage";

export class PageManager {
    private readonly page: Page
    private readonly homePage: HomePage
    private readonly aAndBPage: AandBPage
    private readonly addRemovePage: AddRemovePage
    private readonly basicAuthPage: BasicAuthPage
    private readonly brokenImagesPage: BrokenImagesPage
    private readonly challengingDomPage: ChallengingDomPage
    private readonly checkboxesPage: CheckboxesPage
    private readonly contextMenuPage: ContextMenuPage

    constructor(page: Page) {
        this.page = page
        this.homePage = new HomePage(this.page)
        this.aAndBPage = new AandBPage(this.page)
        this.addRemovePage = new AddRemovePage(this.page)
        this.basicAuthPage = new BasicAuthPage(this.page)
        this.brokenImagesPage = new BrokenImagesPage(this.page)
        this.challengingDomPage = new ChallengingDomPage(this.page)
        this.checkboxesPage = new CheckboxesPage(this.page)
        this.contextMenuPage = new ContextMenuPage(this.page)
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

    onBrokenImagesPage() {
        return this.brokenImagesPage
    }

    onChallangingDomPage() {
        return this.challengingDomPage
    }
    onCheckboxesPage() {
        return this.checkboxesPage
    }

    onContextMenuPage() {
        return this.contextMenuPage
    }
}