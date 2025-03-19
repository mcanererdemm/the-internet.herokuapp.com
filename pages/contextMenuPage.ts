import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class ContextMenuPage {
    // Locators
    readonly headerElement: Locator;

    constructor(readonly page: Page) {
        this.page = page
        this.headerElement = this.page.getByRole('heading', { name: "Context Menu" })
    }


    async verifyHeaderText() {
        const header = this.headerElement
        await expect(header).toHaveText('Context Menu')
    }

    async rightClickBlackAreaAndVerify() {
        this.page.on('dialog', async dialog => {
            const message = dialog.message()
            expect(message).toContain('You selected a context menu')
            await dialog.accept()
        })

        await this.page.locator('#hot-spot').click({ button: "right" })
    }
}