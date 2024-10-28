import { Page, expect } from '@playwright/test';
import { loginLocators } from '../../utils/locators-selector-coderbyte';

export class CoderbyteLoginPage {
    readonly page: Page;
    readonly locators: ReturnType<typeof loginLocators>;

    constructor(page: Page) {
        this.page = page;
        this.locators = loginLocators(page);  // Asignamos los localizadores actualizados
    }

    async navigateCoderbytePage() {
        await this.page.goto('https://coderbyte.com/sl');
    }

    async clickLoginHeaderLink() { // Nombre actualizado
        await this.locators.headerLoginLink.click();
    }

    async clickToggleLoginSelectionButton() { // Nombre actualizado
        await this.locators.toggleLoginSelectionButton.click();
    }

    async enterUsername(username: string) {
        await this.locators.usernameInputField.fill(username);
    }

    //async enterEmail(email: string) {
        //await this.locators.emailInputField.fill(email);
    //}

    async enterPassword(password: string) {
        await this.locators.passwordInputField.fill(password);
    }

    async clickLoginModeToggleOption() { // Nombre actualizado
        await this.locators.loginModeToggleOption.click();
    }

    async clickSubmitLoginButton() { // Nombre actualizado
        await this.locators.submitLoginButton.click();
    }

    async verifyLoginErrorMessageVisible() { // Nombre actualizado
        await expect.soft(this.locators.loginErrorMessage).toBeVisible();
    }
}
