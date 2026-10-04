import { BasePage } from './BasePage.js'

export class LoginPage extends BasePage {
    constructor(page) {
        super(page)
        this.usernameInput = page.locator('#username')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.errorMessage = page.locator('.error-message')
    }

    async login(username, password) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}

export default LoginPage