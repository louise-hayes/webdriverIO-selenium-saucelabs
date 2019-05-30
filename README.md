
App to explore UI tests on workgrid (in this case the navit dev toolbar)

## Dependencies:
```
npm install --save-dev webdriverIO jest java mocha node (v 8.11>)
npm install -g selenium-standalone
npm install @wdio/cli
npm install @wdio/sauce-service --save-dev   https://webdriver.io/docs/sauce-service.html
```

webdriverIO - https://webdriver.io/docs/gettingstarted.html a WebDriver test framework for Node.js, Webdriver/Selenium 2.0 javascript bindings for NodeJS.
Uses selenium under the hood
automates browser testing


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

###Tests
3 ways to run the same test

``` 
npm run test
npm test
./node_modules/.bin/wdio wdio.conf.js 
```
## Env vars
Create a local env file with credentials for navit dev
```
USERNAME=
PASSWORD=
BASEURL=
SAUCE_USERNAME=
SAUCE_ACCESS_KEY=
BUILD_NO=
```
## wdio.conf.js file:
```
 Where do you want to execute your tests? On my local machine
 Which framework do you want to use? mocha
 Shall I install the framework adapter for you? Yes
 Where are your test specs located? ./test/specs/**/*.js
 Which reporter do you want to use?
 Do you want to add a service to your test setup?  selenium-standalone - https://github.com/webdriverio/wdio-selenium-standalone-service
 Shall I install the services for you? Yes
 Level of logging verbosity silent
 In which directory should screenshots gets saved if a command fails? ./errorShots/
 What is the base url? http://localhost
```
Other useful commands :

to set up browser testing without wdio.conf.js file
```
./geckodriver --port 4444
```

To create the wdio config file
```
./node_modules/.bin/wdio config
```