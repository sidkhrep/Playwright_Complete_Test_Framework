import { test, expect } from '@playwright/test'
import { LoginPage } from '../../../pages/Loginpage.js'

test('login page checks', async ({ page }) => {
    const loginPage = new LoginPage(page)

    await page.goto('')

    await expect(page.getByPlaceholder('Username')).toBeVisible()
    await expect(page.getByPlaceholder('Password')).toBeVisible()
})