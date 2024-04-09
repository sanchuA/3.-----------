// https://dev.classmethod.jp/articles/node-mocha/
// テストモジュールの作成

var assert = require('assert');

var myModule = require('./myModule');

describe('myModule', function () {

    describe('greet', function () {

        it('引数に応じて決まった文字列を返すこと', function () {

            assert.equal(myModule.greet('taro'), 'Hello,taro');

        });
    });
});


/*実行結果:VSCode-console

  mocha>  mocha test.js    


  myModule
    greet
      ✔ 引数に応じて決まった文字列を返すこと


  1 passing (6ms)

*/