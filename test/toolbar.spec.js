const assert = require('assert');
require('dotenv').config();
const LoginPage = require('../lib/pages/LoginPage');

describe('Log in to host site and Checks Toolbar is rendered and clickable', () => {
    before(async () => {
        this.loginPage = new LoginPage(browser, process.env.BASEURL);
    });

    it('Log In Get Host Site Title', async () => {
        let title = await this.loginPage.navigateToUrl()
        assert.equal(title, 'Navit Technologies');
        
       await this.loginPage.login(process.env.USERNAME, process.env.PASSWORD)
        console.log("logged in")
        // loginBtn.click()
        // const username = await browser.$('[name="username"]')
        // username.setValue(process.env.USERNAME)
        // const password = await browser.$('[name="password"]')
        // password.setValue(process.env.PASSWORD)
        // const loginBtn = await browser.$('.login-button')
        // loginBtn.click()



        /**Check login page is accessible */
        // browser.url(process.env.BASEURL);
        // const title = browser.getTitle();



        //let my_frame = $('iframe[name="WorkgridFrame"]').value; //this passes - no error - keep for future use maybe

        /* all these fail */
        // browser.findElement('.', 'Chicklet__StyledChicklet-tRQjj');//nope
        // const src = browser.$('*=workgrid'); //since above line fails then elemenent does not exist
        // browser.switchTo().frame("WorkgridFrame");//throws an error: switchTo function is not part of browser object
        // let el = browser.$('Chicklet__StyledChicklet-tRQjj'); //not able to find this - says element does not exist 
        // return browser.frame('WorkgridFrame.content').then(function(el)
        // return browser.frame(el.value).then(function() {
        // return browser.getHTML('head').then(function(html) {
    });

    it('checks Host home page is rendered', () => {
        /**Check home page is accessible */
        const hostPage = browser.$('.today')
        let hostText = hostPage.getText().split(' ').slice(0, 3).join(' ')
        assert.equal(hostText, 'Today at Navit');
    })

    it('gets the text on toolbar to show it renders', () => {
        // only 0 woirks not 1 or 2

        browser.waitUntil(() => {
            return $('iframe[name="WorkgridFrame"]')
        }, 9000, 'expected frame to be different after 5s');
        browser.switchToFrame(0);
        browser.waitUntil(() => {
            return $('.frame-root').getText() === 'To Know\nTo Do\nAssistant\nApps\nActivity\nSettings'
        }, 9000, 'expected text to be different after 5s');
        let toolbar = browser.$('.frame-root');
        assert.equal(toolbar.getText(), 'To Know\nTo Do\nAssistant\nApps\nActivity\nSettings');

    })

    it('clicks To Do componenent and checks the text ', () => {
        const todoSummary = $("(.//*[normalize-space(text()) and normalize-space(.)='To Do'])[1]/preceding::img[1]")
        todoSummary.click()
        todoSummary.saveScreenshot('./test/test-reports/screen-shots/elemScreenshot.png');
        const todoDetail = $("(.//*[normalize-space(text()) and normalize-space(.)='New Content'])[1]/following::div[2]")
        assert.equal(todoDetail.getText(), "You're all done for now. Good work!");
        // browser.debug()
    })
})









