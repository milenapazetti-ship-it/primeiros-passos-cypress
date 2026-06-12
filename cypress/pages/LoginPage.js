class LoginPage {
  constructor() {
    this.selectors = {
      usernameField: '[name="username"]',
      passwordField: '[name="password"]',
      loginButton: '[type="submit"]',
      wrongCredentialAlert: '[role="alert"]',
    }
  }

  accessLoginPage() {
    cy.visit('/auth/login')
  }

  loginWith(username, password) {
    cy.get(this.selectors.usernameField).type(username)
    cy.get(this.selectors.passwordField).type(password)
    cy.get(this.selectors.loginButton).click()
  }

  loginWithUser(username, password) {
    cy.get(this.selectors.usernameField).type(username)
    cy.get(this.selectors.passwordField).type(password)
    cy.get(this.selectors.loginButton).click()
  }

  checkWrongCredentialAlert() {
    cy.get(this.selectors.wrongCredentialAlert)
      .should('be.visible')
      .and('contain.text', 'Invalid credentials')
  }
}

export default LoginPage