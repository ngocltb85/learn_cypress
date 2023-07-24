class CreateNewBrandPage {

    elements = {
        createBtn: () => cy.get('button[type=button]').contains('Create'),
        brandNameInput: () => cy.get('#name'),
        saveBtn: () => cy.get('button[type=submit]').contains('Save'),
        successTxt: () => cy.get('[class$=-message]'),
    }

    clickCreateNewBrand() {
        this.elements.createBtn().click();
    }

    enterBrandName(name) {
        this.elements.brandNameInput().clear();
        this.elements.brandNameInput().type(name);
    }

    clickSave() {
        this.elements.saveBtn().click();
    }
}

export default { CreateNewBrandPage };