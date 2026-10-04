import { test } from '@playwright/test';
import CartPage from '../../../pages/cartPage.js';

test('Came Back From Cart Page', async ({ page }) => {
    await page.goto('/cart.html');

    const cart = new CartPage(page);
    await cart.clickContinueShoppingButton();
});