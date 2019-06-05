const Page = require('./Page')

class LoginPage extends Page {
    constructor(browser, baseUrl) {
        super(browser, baseUrl)

    }

    async login(user, pass) {
        let username = await this.browser.$('[name="username"]')
        await username.setValue(user)
        let password = await this.browser.$('[name="password"]')
        await password.setValue(pass)
        let loginBtn

        try {
            return loginBtn = await this.browser.$('.login-button')
        }
        catch (err) {
            console.log(`Something went wrong with browser.$('.login-button') ${err}`)
        }
    }

    async getHeader() {
        return await super.getSelector('.today')
    }

    async navigateToUrl() {
        return await super.navigateToUrl()
    }
}

module.exports = LoginPage