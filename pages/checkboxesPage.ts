import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class CheckboxesPage {
    // Locators
    readonly headerElement: Locator;

    constructor(readonly page: Page) {
        this.page = page
        this.headerElement = this.page.getByRole('heading', { name: "Checkboxes" })
    }


    async verifyHeaderText() {
        const header = this.headerElement
        await expect(header).toHaveText('Checkboxes')
    }

    async selectFirstCheckboxAndUnselectSecondCheckbox() {
        await this.page.getByRole('checkbox').filter({hasText:"checkbox 1"}).check()
        await this.page.getByRole('checkbox').filter({hasText:"checkbox 2"}).uncheck()
      }
}