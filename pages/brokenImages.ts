import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class BrokenImagesPage {
    // Locators
    readonly headerElement: Locator;

    constructor(readonly page: Page) {
        this.page = page
        this.headerElement = this.page.getByRole('heading', { name: "A/B Test Variation 1" })
    }


    async verifyHeaderText() {
        const header = this.headerElement
        await expect(header).toHaveText('A/B Test Variation')
    }
}