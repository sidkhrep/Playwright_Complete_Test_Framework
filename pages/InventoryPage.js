import { expect } from '@playwright/test';
import { BasePage } from './BasePage.js';

export default class InventoryPage extends BasePage {
    constructor(page) {
        super(page);

        this.productsText = page.locator('.title');
        this.productItems = page.locator('.inventory_list');
        this.clickAddToCart = page.locator('.inventory_item').first().getByRole('button', { name: 'Add to cart' });
        this.shoppingCartBadge = page.locator('.shopping_cart_link');
        this.clickRemoveFromCart = page.locator('.cart_item').first().getByRole('button', { name: 'Remove' });
    }

    async addRemoveFromCart() {

        console.log(await this.productItems.count());
        await this.clickAddToCart.click();
        await this.shoppingCartBadge.click();
        await this.clickRemoveFromCart.click();
    }

    async addToCart() {
        console.log(await this.productItems.count());
        await this.clickAddToCart.click();
        await this.shoppingCartBadge.click();
    }
}