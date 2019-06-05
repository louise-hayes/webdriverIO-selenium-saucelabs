const Page = require('./Page')

class ToolBar extends Page {
    constructor(browser, baseUrl) {
        super(browser, baseUrl)
    }

    async getToolBarFrame(frameName){
        return await super.getFrame(frameName)
    }

    async switchToFrame() {
        return await browser.switchToFrame(0);

    }
    async getToolBar() {
        await this.browser.waitUntil(() => {
            return this.browser.$('.frame-root').getText() === 'To Know\nTo Do\nAssistant\nApps\nActivity\nSettings'
        }, 12000, 'expected text to be different after 5s')
        return await super.getSelector('.frame-root')
    }

    async getPanel(panelName) {
        return await super.getSelector(`div=${panelName}`)
    }

    async getCardSummary(summaryText){
        return await super.getDetail(summaryText)
    }

}

module.exports = ToolBar