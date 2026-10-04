import { BasePage } from './BasePage.js'

export class LoginPage extends BasePage {
    constructor(page) {
        super(page)
        this.usernameInput = page.locator('#user-name')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.locator('input[type="submit"]')
        this.errorMessage = page.locator('[data-test="error"]')
    }

    async login(username, password) {
        await this.usernameInput.waitFor({ state: 'visible', timeout: 30000 })
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}

export default LoginPage

