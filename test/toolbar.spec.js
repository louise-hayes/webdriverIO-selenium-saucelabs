const assert = require('assert');
require('dotenv').config();
const Page = require('../lib/Page');

describe('Log in / Checks Toolbar rendered & clickable', () => {
    before(async () => {
        this.page = new Page(browser, process.env.BASEURL)
    });

    it('Log In  - Get Host Site Title', async () => {
        let title = await this.page.navigateToUrl()
        assert.equal(title, 'Navit Technologies')

        let loginBtn = await this.page.login(process.env.USERNAME, process.env.PASSWORD)
        loginBtn.click()
    });

    it('checks Host home page is rendered', async () => {
        let hostPage = await this.page.getHeader()
        let hostHeader = await hostPage.getText()
        assert.equal(hostHeader.split(' ').slice(0, 3).join(' '), 'Today at Navit')
    })

    it('Switch to iframe and Check toolbar renders', async () => {
        await this.page.getIframe()
        await this.page.switchToFrame();
        let toolBar = await this.page.getToolBar()
        let toolbarText = await toolBar.getText()
        assert.equal(toolbarText, 'To Know\nTo Do\nAssistant\nApps\nActivity\nSettings')
    })

    it('clicks To Do & checks the detailed card ', async () => {
        const todoSummary = await this.page.getDiv('To Do')
        todoSummary.click()
        let cardDetail = await this.page.getDetail("You're all done for now. Good work!")
        let text = await cardDetail.getText()
        assert.equal(text, "You're all done for now. Good work!");
    })

    it('clicks To Know & checks the detailed card ', async () => {
        const todoSummary = await this.page.getDiv('To Know')
        todoSummary.click()
        let cardDetail = await this.page.getDetail("Meeting")
        let text = await cardDetail.getText()
        assert.equal(text, "MEETING");
    })


    it('clicks Assistant & checks the detailed card ', async () => {
        const todoSummary = await this.page.getDiv('Assistant')
        todoSummary.click()
        let cardDetail = await this.page.getImage("systemIcon")
        // console.log("image nane " + cardDetail)
        // let text = await cardDetail.getText()
        // assert.equal(text, "systemIcon");
    })

    it('clicks Apps & checks the detailed card ', async () => {
        const todoSummary = await this.page.getDiv('Apps')
        todoSummary.click()
        // let cardDetail = await this.page.getDetail("Test Summary Fail")
        // let text = await cardDetail.getText()
        // assert.equal(text, "Test Summary Fail");
    })

})






