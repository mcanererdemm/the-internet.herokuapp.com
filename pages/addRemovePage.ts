import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class AddRemovePage {
    // Locators
    readonly headerElement: Locator;
    readonly addButton: Locator;
    deleteButton: Locator;

    constructor(readonly page: Page) {
        this.page = page
        this.headerElement = this.page.getByRole('heading', { name: "Add/Remove Elements" })
        this.addButton = this.page.locator('#content .example').getByRole('button', { name: "Add Element" })
        this.deleteButton = this.page.getByRole('button', { name: "Delete" })
    }

    async verifyHeaderText() {
        const header = this.headerElement
        await expect(header).toHaveText('Add/Remove Elements')
    }

    async clickAddElementbuttonAndVerifyDeleteButton() {
        await this.addButton.click()
        await expect(this.deleteButton).toBeVisible()
        await this.deleteButton.click()
    }

    async clickAddElementbuttonAndDeleteButtonThreeTimes() {
        await this.addButton.click()
        await this.addButton.click()
        await this.addButton.click()
        const deleteButtonNumber = (await this.deleteButton.all()).length
        expect(deleteButtonNumber).toBeLessThanOrEqual(3)
        await this.deleteButton.click()
        await this.deleteButton.click()
        await this.deleteButton.click()
    }
}