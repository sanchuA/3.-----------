// https://dev.classmethod.jp/articles/node-mocha/

// 非同期のテスト

// greetAsync(非同期関数)のテストも追加してみましょう。
// この関数は、コールバック内でアサーションを行なっています。

var assert = require('assert');

var myModule = require('./myModule');

describe('myModule', function () {

  describe('greet', function () {

    it('引数に応じて決まった文字列を返すこと', function () {

      assert.equal(myModule.greet('taro'), 'Hello,taro');

    });
  });

  // greetAsync(非同期関数)のテストも追加してみましょう。
  describe('greetAsync', function () {

    it('引数に応じてコールバック内で決まった文字列になること', function (done) {

      myModule.greetAsync('hanako', function (greet) {

        assert.equal(greet, 'Hello,hanako');

        // 最後にdoneという関数を呼び出しています。
        // この関数が呼ばれるまで次のテストは実行されません。
        done();

      });
    });
  });
});

/*実行結果:VSCode-PowerShell
  mocha> mocha  test1.js


  myModule
    greet
      ✔ 引数に応じて決まった文字列を返すこと
    greetAsync
      ✔ 引数に応じてコールバック内で決まった文字列になること


  2 passing (7ms)



  // 出力形式

  // いままでのテスト結果は出力形式(reporter)が非常にシンプルなものでしたが、
  // mochaではいろいろな形式のテスト結果を指定できます、
  // specというreporterを指定してみましょう。
  // reporterは「-R」か「--reporter」で指定します。

  mocha> mocha -R spec test1.js


  myModule
    greet
      ✔ 引数に応じて決まった文字列を返すこと
    greetAsync
      ✔ 引数に応じてコールバック内で決まった文字列になること


  2 passing (7ms)

*/