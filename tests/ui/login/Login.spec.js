import { test, expect } from '@playwright/test'
import { LoginPage } from '../../../pages/Loginpage.js'
import { config } from '../../../config/envConfig.js'

test('user can login', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.goto(config.baseURL)
    await loginPage.login(config.username, config.password)

    // this is the login code
    await expect(page).toHaveURL(/inventory/)
})