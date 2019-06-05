const assert = require('assert');
require('dotenv').config();
const LoginPage = require('../lib/LoginPage')
const ToolBar = require('../lib/ToolBar')


describe('Log in / Checks Toolbar rendered & clickable', () => {
    before(async () => {
        this.loginPage = new LoginPage(browser, process.env.BASEURL)
        this.toolBar = new ToolBar(browser, process.env.BASEURL)
    });

    it('Log In  - Get Host Site Title', async () => {
        let title = await this.loginPage.navigateToUrl()
        assert.equal(title, 'Navit Technologies')
        let loginBtn = await this.loginPage.login(process.env.USERNAME, process.env.PASSWORD)
        loginBtn.click()
    });

    it('checks Host home page is rendered', async () => {
        let hostPage = await this.loginPage.getHeader()
        let hostHeader = await hostPage.getText()
        assert.equal(hostHeader.split(' ').slice(0, 3).join(' '), 'Today at Navit')
    })

    it('Switch to iframe and Check toolbar renders', async () => {
        await this.toolBar.getToolBarFrame();
        await this.toolBar.switchToFrame();
        let toolBar = await this.toolBar.getToolBar()
        let toolbarText = await toolBar.getText()
        assert.equal(toolbarText, 'To Know\nTo Do\nAssistant\nApps\nActivity\nSettings')
    })

    it('clicks To Do & checks the detailed card ', async () => {
        const todoSummary = await this.toolBar.getPanel('To Do')
        await todoSummary.click()
        let cardDetail = await this.toolBar.getCardSummary("You're all done for now. Good work!")
        let text = await cardDetail.getText()
        assert.equal(text, "You're all done for now. Good work!");
    })

    it('clicks To Know & checks the detailed card ', async () => {
        const todoSummary = await this.toolBar.getPanel('To Know')
        todoSummary.click()
        let cardDetail = await this.toolBar.getCardSummary("Meeting")
        let text = await cardDetail.getText()
        assert.equal(text, "MEETING");
    })


    it('clicks Assistant & checks the detailed card ', async () => {
        const todoSummary = await this.toolBar.getPanel('Assistant')
        await todoSummary.click()
        // let cardDetail = await this.toolBar.getImage("systemIcon")
        // // console.log("image nane " + cardDetail)
        // let text = await cardDetail.getText()
        // assert.equal(text, "systemIcon");
    })

    it('clicks Apps & checks the detailed card ', async () => {
        const todoSummary = await this.toolBar.getPanel('Apps')
        await todoSummary.click()
        // let cardDetail = await this.toolBar.getDetail("Test Summary Fail")
        // let text = await cardDetail.getText()
        // assert.equal(text, "Test Summary Fail");
    })

})






