import { Page } from '@playwright/test';
import { signUpLocators } from '../../utils/locators-selector-coderbyte';

export class CoderbyteSignUpPage {
    readonly page: Page;
    readonly locators: ReturnType<typeof signUpLocators>;

    constructor(page: Page) {
        this.page = page;
        this.locators = signUpLocators(page);  // Asignamos los localizadores actualizados
    }

    async clickSignUp() {
        await this.locators.signUpPageButton.click(); // Actualizado
    }

    async fillSignUpForm(username: string, email: string, password: string) {
        await this.locators.usernameInputField.fill(username); // Actualizado
        console.log('Username filled successfully');
        
        await this.locators.emailInputField.fill(email); // Actualizado
        console.log('Email filled successfully');
        
        await this.locators.passwordInputField.fill(password); // Actualizado
        console.log('Password filled successfully');
    }

    async submitSignUp() {
        await this.locators.createAccountSubmitButton.click(); // Actualizado
    }
}
