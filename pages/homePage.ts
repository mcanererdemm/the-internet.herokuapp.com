import { Page } from "playwright";
import { expect } from "playwright/test";

export class HomePage {

    constructor(readonly page: Page) {
        this.page = page
    }

    async aAndBTesting() {
        await this.goToLink('A/B Testing')
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/abtest')
    }

    async addRemoveElements() {
        await this.goToLink('Add/Remove Elements')
        await expect(this.page).toHaveURL('https://the-internet.herokuapp.com/add_remove_elements/')
    }

    async verifyFootbarLink() {
        const newPage = this.page.waitForEvent('popup')
        await this.page.getByRole('link', { name: 'Elemental Selenium' }).click()
        const page = await newPage;
        await expect(page).toHaveTitle('Home | Elemental Selenium')
    }

    async verifyKnotLink() {
        await this.page.getByRole('img', { name: 'Fork me on GitHub' }).click()
        await expect(this.page).toHaveURL('https://github.com/saucelabs/the-internet')
    }


    async goToLink(link: string) {
        await this.page.getByRole('link', { name: link }).first().click()
        this.page.waitForLoadState('load')
    }

    async loopThroughLinks() {
        for (const link of this.listOfLinks) {
            await this.goToLink(link.toString())
            await this.page.goBack()
        }
    }

    readonly listOfLinks = [
        'A/B Testing',
        'Add/Remove Elements',
        'Basic Auth',
        'Broken Images',
        'Challenging DOM',
        'Checkboxes',
        'Context Menu',
        'Digest Authentication',
        'Disappearing Elements',
        'Drag and Drop',
        'Dropdown',
        'Dynamic Content',
        'Dynamic Controls',
        'Dynamic Loading',
        'Entry Ad',
        'Exit Intent',
        'File Download',
        'File Upload',
        'Floating Menu',
        'Forgot Password',
        'Form Authentication',
        'Frames',
        'Geolocation',
        'Horizontal Slider',
        'Hovers',
        'Infinite Scroll',
        'Inputs',
        'JQuery UI Menus',
        'JavaScript Alerts',
        'JavaScript onload event error',
        'Key Presses',
        'Large & Deep DOM',
        'Multiple Windows',
        'Nested Frames',
        'Notification Messages',
        'Redirect Link',
        'Secure File Download',
        'Shadow DOM',
        'Shifting Content',
        'Slow Resources',
        'Sortable Data Tables',
        'Status Codes',
        'Typos',
        'WYSIWYG Editor'
    ]
}