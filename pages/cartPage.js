import { BasePage } from './BasePage.js';

export class cartPage extends BasePage {
    constructor(page) {
        super(page);

        this.cartButton = page.locator('.shopping_cart_link');
        this.continueShoppingButton = page.getByRole('button', { name: 'Continue Shopping' });
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
        this.firstName = page.getByPlaceholder('First Name');
        this.lastName = page.getByPlaceholder('Last Name');
        this.zipCode = page.getByPlaceholder('Zip/Postal Code');
        this.continue = page.locator('#continue');
        this.finish = page.getByRole('button', { name: 'Finish' });
    }

    async clickContinueShoppingButton() {
        await this.continueShoppingButton.click();
    }

    async clickCartButton() {
        await this.cartButton.click();
        await this.clickContinueShoppingButton();
    }

    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }

    async fillCheckoutForm(firstName, lastName, zipCode) {
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.zipCode.fill(zipCode);
        await this.continue.click();
        await this.finish.click();
    }
}

export default cartPage;