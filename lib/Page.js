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
    async getSelector(selector) {
        try {
            return await this.browser.$(selector)
        }
        catch (err) {
            console.log(`Something went wrong with browser.$(${selector}) ${err}`)
        }
    }

    async waitForAndGetElement(selectorType, selectorValue) {
        await this.browser.waitUntil(() => {
            return this.getSelector(`${selectorType}=${selectorValue}`)
        }, 20000, 'expected element to be rendered after 5s');
        return await this.getSelector(`${selectorType}=${selectorValue}`)
    }
    
    async getButton(buttonName) {
        return await this.waitForAndGetElement('button', buttonName)
    }

    async getImage(imageName) {
        return await this.waitForAndGetElement('img', imageName)
    }

    async getDetail(selectorValue) {
        return await this.waitForAndGetElement('div', selectorValue)
    }

    async getFrame(frameName) {
        return await this.browser.waitUntil(() => {
            return this.browser.$(`iframe[name="${frameName}"]`)
        }, 9000, 'expected frame to be different after 5s')
    }
}

module.exports = Page