import { Locator, Page } from "playwright";
import { expect } from "playwright/test";

export class ChallengingDomPage {
    // Locators
    readonly headerElement: Locator;
    readonly leftSideFirstButton: Locator;
    readonly canvas: Locator;
    readonly leftSideThirdButton: Locator;

    constructor(readonly page: Page) {
        this.page = page
        this.headerElement = this.page.getByRole('heading', { name: "Challenging DOM" })
        this.leftSideFirstButton = this.page.locator('[class = "large-2 columns"] .button').first()
        this.leftSideThirdButton = this.page.locator('[class = "large-2 columns"] .button').nth(2)
        this.canvas = this.page.locator('#canvas')

    }

    async verifyHeaderText() {
        const header = this.headerElement
        await expect(header).toHaveText('Challenging DOM')
    }


    async verifyClickLeftSideButtonChangeCanvas() {
        const firstScreenShot = await this.canvas.screenshot()
        await expect(this.leftSideFirstButton).toBeVisible()
        await this.leftSideFirstButton.click()
        await this.page.waitForTimeout(500)
        const secondScreenShot = await this.canvas.screenshot()
        expect(firstScreenShot).not.toEqual(secondScreenShot)
    }

    async verifyClickLeftSideFirstButtonChangeCanvasThenClickThirdButtonAndVerify() {
        const firstScreenShot = await this.canvas.screenshot()
        await expect(this.leftSideFirstButton).toBeVisible()
        await this.leftSideFirstButton.click()
        await this.page.waitForTimeout(500)
        const secondScreenShot = await this.canvas.screenshot()
        expect(firstScreenShot).not.toEqual(secondScreenShot)

        await expect(this.leftSideThirdButton).toBeVisible()
        await this.leftSideThirdButton.click()
        await this.page.waitForTimeout(500)
        const finalScreenShot = await this.canvas.screenshot()
        expect(secondScreenShot).not.toEqual(finalScreenShot)
    }

    async verifyRowItemSize() {
        const tableRows = this.page.getByRole('row')
        expect((await tableRows.all()).length).toBeGreaterThanOrEqual(11)
    }

    async verifyFirstRowOftable() {
        const firstColumnOfFirstRowOfTable = this.page.getByRole('row').nth(1).locator('td').nth(0)
        await expect(firstColumnOfFirstRowOfTable).toHaveText('Iuvaret0')
    }
}