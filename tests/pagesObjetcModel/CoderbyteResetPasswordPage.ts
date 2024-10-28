import { Page } from '@playwright/test';
import { resetPasswordLocators } from '../../utils/locators-selector-coderbyte';

export class CoderbyteResetPasswordPage {
    readonly page: Page;
    readonly locators: ReturnType<typeof resetPasswordLocators>;

    constructor(page: Page) {
        this.page = page;
        this.locators = resetPasswordLocators(page);  // Asignamos los localizadores actualizados
    }

    async clickForgotPassword() {
        console.log('Esperando que el enlace "Forgot Password" sea visible');
        await this.locators.forgotPasswordLink.waitFor({ state: 'visible', timeout: 10000 }); 
        console.log('El enlace "Forgot Password" es visible');
        await this.locators.forgotPasswordLink.click();
    }

    async resetPassword(email: string) {
        await this.locators.usernameInputField.fill(email); // Actualizado
        await this.locators.resetPasswordButton.click(); // Actualizado
    }
}
