import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/LoginPage'
import DashboardPage from '../pages/DashboardPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

Cypress.on('uncaught:exception', (err) => {
  return false
})

describe('Login Orange HRM Tests', () => {

  beforeEach(() => {
    loginPage.accessLoginPage()
  })

  it('Login - Success', () => {
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  })

  it('Login - Fail', () => {
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkWrongCredentialAlert()
  })
})