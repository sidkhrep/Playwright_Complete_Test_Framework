import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/Loginpage.js'
import { config } from '../config/envConfig.js'

const authFile = 'auth/user.json'

test('Login to the application', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto(config.baseURL)
    await loginPage.login(config.username, config.password)

    await expect(page).toHaveURL(/inventory\.html/)

    await page.context().storageState({
        path: authFile
    })
})