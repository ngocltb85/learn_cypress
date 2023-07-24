import { LoginPage } from '../pages/LoginPage';

describe('Test Login Module', () => {
  const loginObj = new LoginPage();
  beforeEach(() => {
    // executes prior each test within it block
    cy.visit('/login');
  })

  const XLSX = require('xlsx');

  it('My test case', () => {
    const loginObj = new LoginPage();
    cy.fixture('login.xlsx', 'binary').then((fileContent) => {
      const workbook = XLSX.read(fileContent, { type: 'binary' });
      const worksheet = workbook.Sheets['login'];
      const range = XLSX.utils.decode_range(worksheet['!ref']);
      range.s.r = 0; // start from the second row
      const rows = XLSX.utils.sheet_to_json(worksheet, { range });
      console.log(rows);
      rows.forEach((row) => {
        // Type the data into the input field			
        loginObj.enterUsername(row['Username']);
        loginObj.enterPassword(row['Password']);
        // Submit the form or perform other actions with the typed data			
        loginObj.clickLogin();
        cy.contains(row['Message']);
      });
    });
  });

  it('Verify Login successful', () => {
    loginObj.enterUsername('manager')
    loginObj.enterPassword('St2023@')
    loginObj.clickLogin();
    loginObj.elements.successTxt().should('have.text', 'Login successfully');
  })

  it('Verify Login unsuccessful for invalid username', () => {
    loginObj.enterUsername('managerr')
    loginObj.enterPassword('St2023@')
    loginObj.clickLogin();
    loginObj.elements.errorTxt().should('contain', 'Account incorrect');
  })

  it('Verify Login unsuccessful for invalid password', () => {
    loginObj.enterUsername('manager')
    loginObj.enterPassword('St2023@@')
    loginObj.clickLogin();
    loginObj.elements.errorTxt().should('contain', 'Password incorrect');
  })

  it('displays validate below field when a empty field', () => {
    loginObj.emptyUsername()
    loginObj.emptyPassword()
    loginObj.clickLogin();
    loginObj.elements.validateTxt().should('contain', 'Username is required')
    loginObj.elements.validateTxt().should('contain', 'Password is required')
  })
})