// https://pvision.jp/tech/2021/05/memo-mocha-chai-testing-basics/

/*Chaiとは何か

  Chaiはテストの中で使われるAssertionライブラリ。

  Assertionとは、何らかの条件をテストし、
  結果が偽（エラー）となる場合は、その結果を通知（Assert）するもの。
  
  Chaiの場合は、通知のために例外を送出する。
  （Mochaのitはこの例外をキャッチする。）*/

  const assert = require('chai').assert;

  describe('Test with Chai', function () {

    it('Test', function () {

        // Do something ...
        const result = false;

        // ...
        assert.equal(result, true, 'asserted');

    });
});

/*実行結果:VSCode-PowerShell


*/