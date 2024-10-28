
import { test, expect, story, precondition } from '../fixture/fixtureCoderbyte';
import { generateRandomUsername, generateRandomEmail } from '../../utils/generateRandomData';


story('[Automation] Coderbyte | LOGIN | Iniciar y Cerrar sesión, y Recuperar Contraseña', () => {

    precondition(async ({ page, coderbyteLoginPage }) => {
        await coderbyteLoginPage.navigateCoderbytePage();
        await page.waitForLoadState('load');
    });


    test('TC1: Validar Login exitoso con credenciales válidas con más de seis caracteres', async ({page, coderbyteLoginPage, coderbyteProfilePage, coderbyteSignUpPage }) => {
        
        // Generar credenciales aleatorias
        const username = generateRandomUsername();
        const email = generateRandomEmail();
        const password = '987654'; 

        await test.step('Navegar a la página de login', async () => {
            await coderbyteLoginPage.navigateCoderbytePage();
        });

        await test.step('Ingresar al módulo de registro del formulario', async () => {
            await coderbyteSignUpPage.clickSignUp();
        });

        await test.step('Llenar registro del formulario con datos nuevos', async () => {
            await coderbyteSignUpPage.fillSignUpForm(username, email, password);
        });

        await test.step('Hacer clic en el botón de CREATE ACCOUNT', async () => {
            await coderbyteSignUpPage.submitSignUp();
        });

        await test.step('Verificar que la página del perfil esté cargada', async () => {
            await coderbyteProfilePage.verifyProfilePageUrl();
        });

        await test.step('Verificar redirección a la página de perfil', async () => {
            await expect(page).toHaveURL('https://coderbyte.com/challenges?newAccount=true');
        });

        await test.step('Click en MY PROFILE', async () => {
            await coderbyteProfilePage.verifySignUpSuccess();
        });

        // Actualizar el archivo JSON con las credenciales nuevas
        //await updateCredentialsFile(username, email);

        await test.step('Ingresar a la página de login', async () => {
            await coderbyteLoginPage.clickLoginHeaderLink();
        });

        await test.step('Ingreso a la opción LOGIN', async () => { 
            await coderbyteLoginPage.clickToggleLoginSelectionButton();
        });

        await test.step('Ingresar con credenciales válidas al módulo de LOGIN', async () => {
            await coderbyteLoginPage.enterUsername(username);
            await coderbyteLoginPage.enterPassword(password);
            await coderbyteLoginPage.clickSubmitLoginButton();
            await expect(page).toHaveURL('https://coderbyte.com/challenges');
        });
    });

    test('TC2: Validar mensaje de error con nombre de usuario incorrecto', async ({ coderbyteLoginPage }) => {
        const password = '987654';
        const incorrectUsername = 'gregorio'; // Usuario incorrecto
    
        await test.step('Navegar a la página de login', async () => {
            await coderbyteLoginPage.navigateCoderbytePage();
        });
    
        await test.step('Ingreso a la opción LOGIN', async () => {
            await coderbyteLoginPage.clickToggleLoginSelectionButton(); // Método actualizado
        });
    
        await test.step('Ingresar nombre de usuario incorrecto', async () => {
            await coderbyteLoginPage.enterUsername(incorrectUsername);
            await coderbyteLoginPage.enterPassword(password); 
            await coderbyteLoginPage.clickSubmitLoginButton(); // Método actualizado
        });
    
        await test.step('Esperar y verificar mensaje de error', async () => {
            await coderbyteLoginPage.verifyLoginErrorMessageVisible(); // Método actualizado
        });
    });

    test('TC3: Validar mensaje de error con contraseña incorrecta', async ({ coderbyteLoginPage }) => {
        const username = generateRandomUsername();
        const incorrectPassword = '98%';
    
        await test.step('Navegar a la página de login', async () => {
            await coderbyteLoginPage.navigateCoderbytePage();
        });
    
        await test.step('Ingreso a la opción LOGIN', async () => {
            await coderbyteLoginPage.clickToggleLoginSelectionButton(); // Método actualizado
        });
    
        await test.step('Ingresar contraseña incorrecta', async () => {
            await coderbyteLoginPage.enterUsername(username);
            await coderbyteLoginPage.enterPassword(incorrectPassword);
            await coderbyteLoginPage.clickSubmitLoginButton(); // Método actualizado
        });
    
        await test.step('Verificar mensaje de error', async () => {
            await coderbyteLoginPage.verifyLoginErrorMessageVisible(); // Método actualizado
        });
    });
    

    test('TC4: Validar mensaje de error con nombre de usuario y contraseña incorrectos', async ({ coderbyteLoginPage }) => {
        const incorrectUsername = 'gregor567';
        const incorrectPassword = '98%';
    
        await test.step('Navegar a la página de login', async () => {
            await coderbyteLoginPage.navigateCoderbytePage();
        });
    
        await test.step('Ingreso a la opción LOGIN', async () => {
            await coderbyteLoginPage.clickToggleLoginSelectionButton(); // Método actualizado
        });
    
        await test.step('Ingresar nombre de usuario y contraseña incorrectos', async () => {
            await coderbyteLoginPage.enterUsername(incorrectUsername);
            await coderbyteLoginPage.enterPassword(incorrectPassword);
            await coderbyteLoginPage.clickSubmitLoginButton(); // Método actualizado
        });
    
        await test.step('Verificar mensaje de error', async () => {
            await coderbyteLoginPage.verifyLoginErrorMessageVisible(); // Método actualizado
        });
    });
    

    test('TC5: Validar logout exitoso y login exitoso con contraseña válida después de restablecerla', async ({ page, coderbyteLoginPage, coderbyteSignUpPage, coderbyteResetPasswordPage, coderbyteProfilePage }) => {
        const username = generateRandomUsername();
        const email = generateRandomEmail();
        const password = '987654';
    
        await test.step('Navegar a la página de login', async () => {
            await coderbyteLoginPage.navigateCoderbytePage();
            await page.waitForLoadState('load');
        });
    
        await test.step('Ingreso a la opción LOGIN', async () => {
            await coderbyteLoginPage.clickToggleLoginSelectionButton(); // Método actualizado
        });
    
        await test.step('Hacer clic en Forgot Password', async () => {
            await coderbyteResetPasswordPage.clickForgotPassword();
        });
    
        await test.step('Restablecer la contraseña', async () => {
            await coderbyteResetPasswordPage.resetPassword(email);
        });
    
        await test.step('Navegar a la página de login nuevamente', async () => {
            await coderbyteLoginPage.navigateCoderbytePage();
        });
    
        await test.step('Ingresar al módulo de registro del formulario', async () => {
            await coderbyteSignUpPage.clickSignUp();
        });
    
        await test.step('Llenar registro del formulario con datos nuevos', async () => {
            await coderbyteSignUpPage.fillSignUpForm(username, email, password);
        });
    
        await test.step('Hacer clic en el botón de CREATE ACCOUNT', async () => {
            await coderbyteSignUpPage.submitSignUp();
        });
    
        await test.step('Verificar que la página del perfil esté cargada', async () => {
            await coderbyteProfilePage.verifyProfilePageUrl();
        });
    
        await test.step('Verificar redirección a la página de perfil', async () => {
            await expect(page).toHaveURL('https://coderbyte.com/challenges?newAccount=true');
        });
    
        await test.step('Click en MY PROFILE', async () => {
            await coderbyteProfilePage.verifySignUpSuccess();
        });
    
        // Actualizar el archivo JSON con las credenciales nuevas
        //await updateCredentialsFile(username, email);
    
        await test.step('Ingresar a la página de login', async () => {
            await coderbyteLoginPage.clickLoginHeaderLink(); // Método actualizado
        });
    
        await test.step('Ingreso a la opción LOGIN', async () => { 
            await coderbyteLoginPage.clickLoginModeToggleOption();
        });
    
        await test.step('Ingresar con credenciales válidas al módulo de LOGIN', async () => {
            await coderbyteLoginPage.enterUsername(username);
            await coderbyteLoginPage.enterPassword(password);
            await coderbyteLoginPage.clickSubmitLoginButton(); // Método actualizado
            await expect(page).toHaveURL('https://coderbyte.com/challenges');
        });
    });
    
});
