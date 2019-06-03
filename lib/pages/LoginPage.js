
class LoginPage {
    constructor(
        browser,
        baseUrl
    ) {
        this.baseUrl = baseUrl
        this.browser = browser

        console.log('Login Page Construtor', this.baseUrl)
        // console.log(this.browser)
    }


    async navigateToUrl () {
        this.browser.url(this.baseUrl);
        /**Check login page is accessible */
        return this.browser.getTitle();
    }

    async login(user, pass) {
        let username = await this.browser.$('[name="username"]')
        await username.setValue(user)
        let password = await this.browser.$('[name="password"]')
       await password.setValue(pass)
        let loginBtn
        try { 
             loginBtn = await this.browser.$('.login-button')
        }
        catch (err)  {
            console.log(err)
        }
        // this.browser.delay(2000)
         await loginBtn.click()
    }
}

module.exports = LoginPage;