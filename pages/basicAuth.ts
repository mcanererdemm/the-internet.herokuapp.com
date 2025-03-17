import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class BasicAuthPage {
    readonly message: Locator;
    // Locators

    constructor(readonly page: Page) {
        this.page = page
        this.message = this.page.getByRole('paragraph')
    }

    async verifySuccessfulAuthMessage() {
        await expect(this.message).toContainText("Congratulations")
    }
}