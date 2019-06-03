
App to explore UI tests on workgrid (in this case the navit dev toolbar)

## Dependencies:
```
node (v 8.11>)
npm install --save-dev webdriverIO jest java mocha chai-webdriver @wdio/cli @wdio/sauce-service
npm install -g selenium-standalone

brew cask install sauce-connect
```
webdriverIO

https://webdriver.io/docs/gettingstarted.html 

https://webdriver.io/docs/sauce-service.html (to set up saucelabs integration)
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
## start geckodriver for firefox:
 ```
 ./geckodriver --port 4444
```

Gecko is a web browser engine used in many applications developed by Mozilla Foundation and the Mozilla Corporation. Gecko Driver is the link between your tests in Selenium and the Firefox browser. GeckoDriver is a proxy for using W3C WebDriver-compatible clients to interact with Gecko-based browsers i.e.

###Tests
ways to run the test

``` 
npm run test:local will run the test locally 

npm run test:sauce : this will run the test in saucelabs

npm test - this will run the test locally

./node_modules/.bin/wdio wdio-sauce.conf.js 
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
todo:

For sauceconnect:
needd script to turn on debug options (only required for debug in launch.json)

need to add script to run gecko and selenium-standalonen forn npm test local

