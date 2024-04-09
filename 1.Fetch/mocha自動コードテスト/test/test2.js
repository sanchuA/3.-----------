// https://qiita.com/tarotaro1129/items/fa1129dc54efc74fba60

/*beforeとafterでテストの前後に記述する

テストを実行する前後に実行するbefore/after関数を設定することができます。
すべてのitの前後で実行するするには、beforeEach/afterEachを使います。*/

const assert = require('assert');

describe("test", function() {

  before(() => alert("テストが実行される準備ができました"));
  after(() => alert("テストの実行が完了しました"));

  beforeEach(() => alert("テストが始まります"));
  afterEach(() => alert("テストが終わります"));

  it('test 1', () => alert(1));
  it('test 2', () => alert(2));

});
/*実行結果:VSCode-PowerShell
  test> mocha test2.js


  test
    1) "before all" hook for "test 1"
    2) "after all" hook for "test 2"


  0 passing (6ms)
  2 failing

  1) test
      "before all" hook for "test 1":
    ReferenceError: alert is not defined
      at Context.<anonymous> (test2.js:12:16)
      at process.processImmediate (node:internal/timers:478:21)

  2) test
      "after all" hook for "test 2":
    ReferenceError: alert is not defined
      at Context.<anonymous> (test2.js:13:15)
      at process.processImmediate (node:internal/timers:478:21)

*/