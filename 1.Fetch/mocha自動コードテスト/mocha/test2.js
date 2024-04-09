// https://dev.classmethod.jp/articles/node-mocha/
var assert = require('assert');
var myModule = require('./myModule');

before(function (done) {
    console.log('[describe]before test')
    done();
});

after(function (done) {
    console.log('[describe]after test')
    done();
});

beforeEach(function (done) {
    console.log('[it]before every test');
    done();
});

afterEach(function (done) {
    console.log('[it]after every test')
    done();
});

/*実行結果:VSCode-PowerShell
  mocha> mocha  test2.js


  0 passing (1ms)

*/