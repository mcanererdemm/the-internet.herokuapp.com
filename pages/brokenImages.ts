import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class BrokenImagesPage {
    // Locators
    readonly headerElement: Locator;
    readonly thirdImage: Locator;

    constructor(readonly page: Page) {
        this.page = page
        this.headerElement = this.page.getByRole('heading', { name: "Broken Images" })
        this.thirdImage = this.page.locator('#content .example img').nth(2)
    }


    async verifyHeaderText() {
        const header = this.headerElement
        await expect(header).toContainText('Broken Images')
    }

    async verifyThirdImage() {
        expect(await this.thirdImage.getAttribute('src')).toEqual('img/avatar-blank.jpg')
    }
}