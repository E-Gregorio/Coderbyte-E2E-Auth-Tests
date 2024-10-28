import { Page, expect } from '@playwright/test';
import { profileLocators } from '../../utils/locators-selector-coderbyte';

export class CoderbyteProfilePage {
    readonly page: Page;
    readonly locators: ReturnType<typeof profileLocators>;

    constructor(page: Page) {
        this.page = page;
        this.locators = profileLocators(page);  // Asignamos los localizadores actualizados
    }

    async verifyProfilePageUrl() {
        await expect(this.page).toHaveURL('https://coderbyte.com/sl');
    }

    async verifySignUpSuccess() {
        await this.locators.profileMenuItem.waitFor({ state: 'visible', timeout: 60000 }); // Nombre actualizado para el menú del perfil
        await this.locators.profileMenuItem.hover(); // Nombre actualizado para el menú del perfil
        await this.locators.logoutLinkButton.click(); // Nombre actualizado para el botón de cerrar sesión
        await expect(this.page).toHaveURL('https://coderbyte.com/');
    }
}
