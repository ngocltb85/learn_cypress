class LoginPage{
    
        elements = { 
             usernameInput : () => cy.get('#username'),      
             passwordInput : () => cy.get('#password'),    
             loginBtn : () => cy.get('button[type=submit]'),
             successTxt : () => cy.get('[class$=-message]'),
             errorTxt : () => cy.get('[class$=-message]'),
             validateTxt : () => cy.get('[id$=_help]')
         }
    
       enterUsername(username)
       {
           this.elements.usernameInput().clear();
           this.elements.usernameInput().type(username);
       }
    
       enterPassword(password)
       {
           this.elements.passwordInput().clear();
           this.elements.passwordInput().type(password);
       }
    
       emptyUsername()
       {
           this.elements.usernameInput().clear();
       }
    
       emptyPassword()
       {
           this.elements.passwordInput().clear();
       }
      
       clickLogin() {
           this.elements.loginBtn().click();
       }
       
       
      }
      
      
      export default {LoginPage};