// to do - create script that is invokeed when npm run test:local is kicked off, to run geckodriver and selenium-standalone for local test runs
const execa = require('execa')

console.log( "to create a script that runs gecko and selenium standalone that is required to run the wdio test tool locally")


(async () => {
    await execa("node ./selenium-standalone start");
    await execa("node ./geckodriver --port 4445")
})();
