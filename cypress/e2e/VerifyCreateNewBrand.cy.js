import { LoginPage } from "../pages/LoginPage";
import { CreateNewBrandPage } from "../pages/CreateNewBrandPage";

describe('POM Test', () => {

    let isLogin = false;

    beforeEach(() => {
        if (isLogin) {
            cy.visit("/login");
            const loginObj = new LoginPage();
            loginObj.enterUsername('manager');
            loginObj.enterPassword('St2023@');
            loginObj.clickLogin();
            cy.visit("/brands/create");
            cy.wait(2000);
        }
    })

    it("Confirm load create new brand screen in case no login", () => {
        cy.visit("/brands/create");
        cy.wait(2000);
        cy.url().should("include", "https://dev.admin-digieye.stunited.vn/login");
        isLogin = true;
    })

    it("Confirm load creste new brand screen in case no login", () => {
        cy.url().should("include", "https://dev.admin-digieye.stunited.vn/brands/create");
    })

    it('Verify Create new brand successful', () => {
        const createNewBrandObj = new CreateNewBrandPage();
        createNewBrandObj.enterBrandName('ngocltb');
        createNewBrandObj.clickSave();
        createNewBrandObj.elements.successTxt().should('contain', 'Create new data successfully');
    })

})