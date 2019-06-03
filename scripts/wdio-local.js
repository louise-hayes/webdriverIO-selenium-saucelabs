// to do - create script to trun geckodriver and selenium-standalone for local test runs
const execa = require('execa')

console.log( "to create a script that runs gecko and selenium standalone that is required to run the wdio test tool locally")

// execa("node ./selenium-standalone start")

(async () => {
    const {stdout} = await execa('echo', ['unicorns']);
    console.log(stdout);
    //=> 'unicorns'
})();


// execa("node ./geckodriver --port 4445")
