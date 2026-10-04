import { test, expect } from '../../../fixtures/baseFixture.js';
import InventoryPage from '../../../pages/InventoryPage.js';


test('Add and Remove Items from Cart', async ({ inventoryPage }) => {
    
   await inventoryPage.goto('/inventory.html');

    await expect(inventoryPage.page).toHaveURL(/inventory/);

    await expect(inventoryPage.productsText).toHaveText('Products');

    await inventoryPage.addRemoveFromCart();
});
