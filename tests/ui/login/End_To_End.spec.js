import { test } from '../../../fixtures/baseFixture.js';

test('End to End Test', async ({ page, inventoryPage, cartPage }) => {
        await page.goto('/inventory.html');

        await inventoryPage.addToCart();
        await cartPage.clickCheckoutButton();
        await cartPage.fillCheckoutForm('John', 'Doe', '12345');

});