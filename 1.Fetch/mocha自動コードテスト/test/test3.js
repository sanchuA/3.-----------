//https://numb86-tech.hatenablog.com/category/mocha?page=1491653275

const assert = require('assert');

function asyncAdd(a, b) {
  return new Promise((resolve) => {
    resolve(a+b);
  });
};

describe('async test', () => {
  it('return Promise', () => {
    let result = 0;
    return asyncAdd(2, 3).then((result) => {
      assert(result === 9);
    });
  })
});

/*実行結果:VSCode-PowerShell
    test> mocha test3.js


  async test
    1) return Promise


  0 passing (24ms)
  1 failing

  1) async test
      return Promise:

      AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:

  assert(result === 9)

      + expected - actual

      -false
      +true

      at C:\JavaScriptWorkSpace\現代のJavaScriptチュートリアル\3.その他の記事\3.ネットワークリクエスト\1.Fetch\mocha自動コードテスト\test\test3.js:13:7
*/