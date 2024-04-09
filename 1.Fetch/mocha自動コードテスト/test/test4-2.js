// https://pvision.jp/tech/2021/05/memo-mocha-chai-testing-basics/

/*前処理と後処理のためのHook

  describeには、before/after/beforeEach/afterEachといったHookを設定できる。
  
  Hookはユーザーの用意する関数で、ここではテストの前処理、後処理を記述できる。

  before/afterはdescribeでまとめられたテスト全体の前処理、後処理であり、
  
  beforeEach/afterEachは、各テスト対する前処理、後処理となる。。*/

  describe('Before/After', function () {

    before(function () {

        console.log('> Before');

    });

    beforeEach(function () {

        console.log('> BeforeEach');

    });

    after(function () {

        console.log('> After');

    });

    afterEach(function () {

        console.log('> AfterEach');

    });

    describe('Before/After - Sub', function () {

        it('Test - Sub', function () {

            console.log('>> Test - Sub');

        });
    });

    it('Test#1', function () {

        console.log('> Test#1');

    });

    it('Test#2', function () {

        console.log('> Test #2');
        
    })
  });

/*実行結果:VSCode-PowerShell

      mocha test4-2.js

      Before/After        
    > Before
    > BeforeEach
    > Test#1
        ✔ Test#1
    > AfterEach
    > BeforeEach
    > Test #2
        ✔ Test#2
    > AfterEach
        Before/After - Sub
    > BeforeEach
    >> Test - Sub
          ✔ Test - Sub    
    > AfterEach
    > After


      3 passing (8ms)     

*/