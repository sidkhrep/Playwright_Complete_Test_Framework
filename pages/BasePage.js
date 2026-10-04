export class BasePage {

    constructor(page) {
        this.page = page
    }

    async goto(url) {
        await this.page.goto(url)
    }

    async reload() {
        await this.page.reload()
    }

    async goBack() {
        await this.page.goBack()
    }

    async getTitle() {
        return await this.page.title()
    }

    async getCurrentUrl() {
        return this.page.url()
    }
}