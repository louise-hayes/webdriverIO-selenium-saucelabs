
class Page {
    constructor(
        browser,
        baseUrl
    ) {
        this.baseUrl = baseUrl
        this.browser = browser
    }

    async navigateToUrl() {
        try {
            await this.browser.url(this.baseUrl)
            return this.browser.getTitle()

        }
        catch (err) {
            console.log(`Something went wrong with browser.URL(${BASEURL}) ${err}`)
            return err
        }

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
        let hostPage
        try {
            return await this.browser.$('.today')
        }
        catch (err) {
            console.log(`Something went wrong with browser.$('today') ${err}`)
        }
    }

    async switchIframe(){
        return await this.browser.waitUntil(() => {
            return this.browser.$('iframe[name="WorkgridFrame"]')
        }, 9000, 'expected frame to be different after 5s')
      

    }

    async getToolBar(){
         await this.browser.waitUntil(() => {
            return  this.browser.$('.frame-root').getText() === 'To Know\nTo Do\nAssistant\nApps\nActivity\nSettings'
        }, 9000, 'expected text to be different after 5s')
       
        return await this.browser.$('.frame-root')


    }
}

module.exports = Page