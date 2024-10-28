import { Page, Locator } from '@playwright/test';

// CoderbyteLoginPage Locators
export const loginLocators = (page: Page) => ({
    headerLoginLink: page.locator('ul.main-nav-first-half li.menu-item.logIn a'), // Enlace de inicio de sesión en el encabezado
    toggleLoginSelectionButton: page.locator('.mode-toggle>.mode-toggle-option').nth(0), // Botón de selección en el modo toggle para login
    usernameInputField: page.locator('input[type="text"]'), // Campo de entrada para nombre de usuario
    //emailInputField: page.getByRole('textbox').nth(1), // Campo de entrada para el correo electrónico
    passwordInputField: page.locator('input[type="password"]'), // Campo de entrada para la contraseña
    loginModeToggleOption: page.locator('.mode-toggle-option:has-text("LOGIN")'), // Opción de modo de toggle para login
    submitLoginButton: page.getByRole('button', { name: 'login' }), // Botón para enviar inicio de sesión
    loginErrorMessage: page.locator('.login-errors > .login-error').nth(0) // Mensaje de error al iniciar sesión
});

// CoderbyteProfilePage Locators
export const profileLocators = (page: Page) => ({
    profileMenuItem: page.locator('.menu-item-with-extension').nth(1), // Menú del perfil
    logoutLinkButton: page.locator('text=Logout') // Enlace para cerrar sesión
});

// CoderbyteResetPasswordPage Locators
export const resetPasswordLocators = (page: Page) => ({
    forgotPasswordLink: page.locator('a[href="/forgotpassword"]'), // Enlace de "¿Olvidaste tu contraseña?"
    usernameInputField: page.locator('#username_field'), // Campo de entrada para el nombre de usuario
    resetPasswordButton: page.locator('#fp_reset') // Botón para restablecer la contraseña
});

// CoderbyteSignUpPage Locators
export const signUpLocators = (page: Page) => ({
    signUpPageButton: page.getByText('SIGN UP', { exact: true }), // Botón de registro en la página de inicio
    usernameInputField: page.getByRole('textbox').first(), // Campo de entrada para nombre de usuario
    emailInputField: page.locator('.login-field-input').nth(1), // Campo de entrada para correo electrónico
    passwordInputField: page.locator('input[type="password"]'), // Campo de entrada para contraseña
    createAccountSubmitButton: page.getByRole('button', { name: 'create account' }) // Botón para enviar la creación de cuenta
});
