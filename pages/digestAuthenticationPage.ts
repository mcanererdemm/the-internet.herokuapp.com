import { Browser, Page, expect, APIRequestContext } from "playwright/test";

export class DigestAuthenticationPage {

    constructor(readonly page: Page) {
        this.page = page
    }


    async authenticateWithNewContext(browser: Browser) {
        const newContext = await browser.newContext({
            httpCredentials: {
                username: 'admin',
                password: 'admin'
            }
        })
        const newPage = await newContext.newPage()
        await newPage.goto('https://the-internet.herokuapp.com/digest_auth')

        const successMessage = await newPage.locator('p').textContent();
        expect(successMessage).toContain('Congratulations! You must have the proper credentials.')

        // Tarayıcı bağlamını kapat
        await newContext.close()
    }


    async authenticateWithHttpHeader() {
        await this.page.goto('https://admin:admin@the-internet.herokuapp.com/digest_auth')

        const successMessage = await this.page.locator('p').textContent()
        expect(successMessage).toContain('Congratulations! You must have the proper credentials.')
    }

    async authenticateWithRequest(request: APIRequestContext) {
        const credentials = Buffer.from("admin:caner").toString('base64')
        const response = await request.get('https://the-internet.herokuapp.com/digest_auth', {
            headers: {
                Authorization: `Basic ${credentials}`
            },
        });

        const successMessage = response.status()
        expect(successMessage).toEqual(400)
    }
}