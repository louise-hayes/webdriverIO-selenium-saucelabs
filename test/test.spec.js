require('dotenv').config();

describe('test to login', () => {
    const assert = require('assert');
    it('logs into multi browsers', () => {
        // don't need to handle async now, sync = true in wdio conf file
        // (async () => {
        browser.url('https://workgrid-development.us-east-1.np.paas.lmig.com/navit/login');
        const inputElem = browser.$('[name="username"]')
        inputElem.setValue('louise.hayes@libertymutual.com')
        const inputElem2 = browser.$('[name="password"]')
        inputElem2.setValue('NavitRules!')
        const title = browser.getTitle();
        assert.equal(title, 'Navit Technologies');
        console.log(title);
        const submitBtn = browser.$('.login-button')
        submitBtn.click()
        browser.debug();
        browser.pause(6000);
        browser.takeScreenshot();
        const inputElem3 = browser.$('.today')
        // console.log(inputElem3.getText())
        // // console.log('louise')
        // assert.equal(inputElem3.getText(), 'Today at Navit Technologies\nWed May 29 2019');
        // browser.waitForExist('iframe[name="WorkgridFrame"]');
        browser.switchToFrame(0);
        // let el = browser.$('Chicklet__StyledChicklet-tRQjj')
        // console.log(el.getText())

        // let my_frame = $('iframe[name="WorkgridFrame"]').value;
        // browser.frame(my_frame);
        
        // console.log(my_frame)
        console.log("louise browser")
        
        // console.log(browser)
        // return browser.frame('WorkgridFrame.content').then(function(el) {
        // return browser.frame(el.value).then(function() {
        // return browser.getHTML('head').then(function(html) {
        console.log("louise iframe")
        // browser.frame(my_frame);
        // this no longer works
        // const contents = browser.getHTML('#root')
        // assert.includes(contents('Sign In')).toBeTruthy()


        // don't need to handle async now as wdio.conf.js sync = true
        // await browser.deleteSession();
        // })().catch((e) => console.error(e));

    });
    // it('gets the toolbar text To Know once logged in', () => {

    // const inputElem4 = browser.$('#workgrid-baseline-root');
    // console.log(`should be dumping tabs id contents here ${inputElem4.getTabIds()}`)
    // it('should switch to the iframe', function () {
    //     // browser.waitForExist('iframe[name="WorkgridFrame"]');
    //     let my_frame = $('iframe[name="WorkgridFrame"]').value;
    //     browser.frame(my_frame);

    //     // return browser.frame('WorkgridFrame.content').then(function(el) {
    //     // return browser.frame(el.value).then(function() {
    //     // return browser.getHTML('head').then(function(html) {
    //     console.log("iframe")
    //     browser.frame(my_frame);
    //     // console.log(html);
    //     // });
    //     // });
    //     // });
    // });
    // assert.equal(inputElem4.getTabIds(), 'To Know');
    // })
})









