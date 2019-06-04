
App to explore UI automated browswer tests for in this case the navit dev toolbar
https://github.com/louise-hayes/webdriverIO-selenium-saucelabs.git

## Dependencies:
```
node (v 8.11>)
npm install --save-dev webdriverIO jest java mocha @wdio/cli @wdio/sauce-service
npm install -g selenium-standalonen (needed running tests locally)

brew cask install sauce-connect
```
webdriverIO

https://webdriver.io/docs/gettingstarted.html 

https://webdriver.io/docs/sauce-service.html (to set up saucelabs integration)
https://saucelabs.com : create account and obtain the user-name and ACCESSKEY
https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/ to obtain config options for any browser platform scenario
https://webdriver.io/docs/api/webdriver.html (USefull for manipulating browser object)

a WebDriver test framework for Node.js, Webdriver/Selenium 2.0 javascript bindings for NodeJS.
Uses selenium under the hood
Automates browser testing


## Start selenium-standalone
```
selenium-standalone install
selenium-standalone start
(starts on port 4444 - webdriverio uses this)
```
## Build a webdriverIO config file (wdio.config.js)
This file will specify the location of the tests, frameworks you want to use, reporters, browsers and general config of the project.
```
./node_modules/.bin/wdio config
```

Here we have 2 files depending on if tests are to be run locally or on saucelabs
FYI you can access the webdriver instance in code through the global browser or driver object. This repo uses the browser object https://webdriver.io/docs/browserobject.html

## start geckodriver - if running tests on firefox needed for firefox:
 ```
 ./geckodriver --port 4445
```

Gecko is a web browser engine used in many applications developed by Mozilla Foundation and the Mozilla Corporation. Gecko Driver is the link between your tests in Selenium and the Firefox browser. GeckoDriver is a proxy for using W3C WebDriver-compatible clients to interact with Gecko-based browsers i.e.

###Tests
ways to run the test

``` 
npm run test:local - will run the test locally 

npm run test:sauce -  will run the test in saucelabs

npm test - this will run the test locally

./node_modules/.bin/wdio wdio-sauce.conf.js - will run the test using specified wdio conf file 
```
## Env vars
Create a local env file with credentials for your target URL 
```
USERNAME=
PASSWORD=
BASEURL=
SAUCE_USERNAME=
SAUCE_ACCESS_KEY=
BUILD_NO=
```
## wdio.conf.js file setup parameters
```
 Where do you want to execute your tests? On my local machine
 Which framework do you want to use? mocha
 Shall I install the framework adapter for you? Yes
 Where are your test specs located? ./test/specs/**/*.js
 Which reporter do you want to use? spec
 Do you want to add a service to your test setup?  selenium-standalone - https://github.com/webdriverio/wdio-selenium-standalone-service
 Shall I install the services for you? Yes
 Level of logging verbosity silent
 In which directory should screenshots gets saved if a command fails? ./errorShots/
 What is the base url? http://localhost
```
Other useful links :
https://webdriver.io/blog/2018/12/19/webdriverio-v5-released.html#how-to-upgrade-to-v5 : great blog about latest realease of webdriverIO (V5)


todo:

need script to turn on debug options (only required for debug in launch.json)
add script to run gecko and selenium-standalone when npm test local run
exband on page model object
selectors options: currently using XPATH for toolbar selector as class selector not working (Chicklet__StyledChicklet-tRQjj lexHBV)
// browser.findElement('.', 'Chicklet__StyledChicklet-tRQjj');//nope
Using Katalon to record screen actions and grab ids/class/selector names.
Katalon  xpath samples

 driver.get("https://workgrid-development.us-east-1.np.paas.lmig.com/navit/login");
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Terms and Conditions'])[1]/preceding::input[1]")).click();
    // ERROR: Caught exception [ERROR: Unsupported command [selectFrame | index=0 | ]]
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='To Know'])[1]/preceding::img[1]")).click();
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='To Know'])[1]/following::img[1]")).click();
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='To Do'])[1]/following::img[1]")).click();
    driver.findElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Assistant'])[1]/following::img[1]")).click();
  }