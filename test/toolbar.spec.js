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
        // browser frames are accessible via index, only 0 works - not 1 or 2
        await this.page.switchIframe()
        await browser.switchToFrame(0);
        let toolBar = await this.page.getToolBar()
        let toolbarText = await toolBar.getText()
        assert.equal(toolbarText, 'To Know\nTo Do\nAssistant\nApps\nActivity\nSettings')
    })

    it('clicks To Do / checks the detailed card ', () => {

        // const todoSummary = browser.$("(.//*[normalize-space(text()) and normalize-space(.)='To Know'])[1]/following::img[1]")
        // const todoSummary = browser.$("(.//*[normalize-space(text()) and normalize-space(.)='To Know'])[1]/following::img[1]")
        const todoSummary = browser.$('div=To Do')
        todoSummary.click()
        browser.waitUntil(() => {
            return $("div=You're all done for now. Good work!")
        }, 5000, 'expected element to be rendered after 5s');
        let todoDetail = browser.$("div=You're all done for now. Good work!")
        const text = todoDetail.getText()
        // console.log(`text ${text}`)
        assert.equal(text, "You're all done for now. Good work!");










        // const todoSummary = $("(.//*[normalize-space(text()) and normalize-space(.)='To Know'])[1]/preceding::img[1]")
        // // driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='To Do'])[1]/following::img[1]")).click();
        // todoSummary.click()

        // todoSummary.saveScreenshot('./test/test-reports/screen-shots/elemScreenshot.png');
        // const todoDetail = $("(.//*[normalize-space(text()) and normalize-space(.)='New Content'])[1]/following::div[2]")
        // assert.equal(todoDetail.getText(), "You're all done for now. Good work!");



    })



    //let my_frame = $('iframe[name="WorkgridFrame"]').value; //this passes - no error - keep for future use

    /* all these fail */
    // browser.findElement('.', 'Chicklet__StyledChicklet-tRQjj');//nope
    // const src = browser.$('*=workgrid'); //since above line fails then elemenent does not exist
    // browser.switchTo().frame("WorkgridFrame");//throws an error: switchTo function is not part of browser object
    // let el = browser.$('Chicklet__StyledChicklet-tRQjj'); //not able to find this - says element does not exist 
    // return browser.frame('WorkgridFrame.content').then(function(el)
    // return browser.frame(el.value).then(function() {
    // return browser.getHTML('head').then(function(html) {})


})






