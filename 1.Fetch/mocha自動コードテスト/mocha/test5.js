// https://qiita.com/tarotaro1129/items/fa1129dc54efc74fba60

var assert = require('assert');
var myModule = require('./myModule');

describe("myModule", function() {

  before(() => alert("テストが実行される準備ができました"));
  after(() => alert("テストの実行が完了しました"));

  beforeEach(() => alert("テストが始まります"));
  afterEach(() => alert("テストが終わります"));

  it('test 1', () => alert(1));
  it('test 2', () => alert(2));

});