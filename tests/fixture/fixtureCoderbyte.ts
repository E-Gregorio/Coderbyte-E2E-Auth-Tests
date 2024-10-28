import { Page, test as baseTest } from '@playwright/test'; // Importa 'Page' desde '@playwright/test'
import { CoderbyteLoginPage } from '../pagesObjetcModel/CoderbyteLoginPage';
import { CoderbyteProfilePage } from '../pagesObjetcModel/CoderbyteProfilePage';
import { CoderbyteSignUpPage } from '../pagesObjetcModel/CoderbyteSignUpPage';
import { CoderbyteResetPasswordPage } from '../pagesObjetcModel/CoderbyteResetPasswordPage';

const test = baseTest.extend<{
    page: Page;
    coderbyteLoginPage: CoderbyteLoginPage;
    coderbyteProfilePage: CoderbyteProfilePage;
    coderbyteSignUpPage: CoderbyteSignUpPage;
    coderbyteResetPasswordPage: CoderbyteResetPasswordPage;
}>({
    // Crea una instancia de las páginas y pasa la instancia de `Page`
    coderbyteLoginPage: async ({ page }, use) => {
        await use(new CoderbyteLoginPage(page));
    },
    coderbyteProfilePage: async ({ page }, use) => {
        await use(new CoderbyteProfilePage(page));
    },
    coderbyteSignUpPage: async ({ page }, use) => {
        await use(new CoderbyteSignUpPage(page));
    },
    coderbyteResetPasswordPage: async ({ page }, use) => {
        await use(new CoderbyteResetPasswordPage(page));
    },
});

// Exporta la configuración del test
export { test };

// Exporta utilidades principales
export const story = test.describe;
export const expect = test.expect;

// Exporta hooks para pruebas
export const beforeAll = test.beforeAll;
export const precondition = test.beforeEach;
export const afterEach = test.afterEach;
export const afterAll = test.afterAll;