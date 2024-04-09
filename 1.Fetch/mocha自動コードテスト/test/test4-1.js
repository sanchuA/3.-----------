// https://pvision.jp/tech/2021/05/memo-mocha-chai-testing-basics/

/*コールバックのコンテキスト

  itのコールバックが呼び出される時、そのコンテキストはMochaが設定したものとなる。
  
  そのコンテキストには、describeやitなどのMocha自身の機能が予めロードされている。
  
  (初めてMochaのプログラム例を見た時、describeやitがどこから来たのか不思議だったが …)

  describeのコールバックに、itの呼び出し以外の何らかのコードを書くことは禁止されていない。
  ただし、その結果がどのようにテストコード(itのコールバック)に反映されるのかは要注意である。

  コールバックの実行順序とコンテキストを確認するために、
  下記のようなプログラムを書いてみた。
  
  途中変数valueに値を入れ直しながら、コールバックの中で参照している。*/

console.log(`世界の始まり`);

let value = '!!';

//describeとitでコールバックの実行タイミングが異なることが分かる。
describe('世界#1', function () {

    console.log(`> 世界#1の始まり - ${value}`);

    value = 'A';

    //describeとitでコールバックの実行タイミングが異なることが分かる。

    // また各itの中で参照している変数valueの値は、
    // 直前に外側のdescribeの中で定義されたものとは異なっている。

    // グローバル変数を参照しているので、
    // valueの更新はコールバックの実行順に更新・引継されることになる。
    it('テストA', function () {

        console.log(`テストAの中 - ${value}`); //valueはグローバル変数を参照している

        value = 'AA';

    });

    console.log(`> A-Bの中間 - ${value}`);
    value = 'B';

    it('テストB', function () {
        console.log(`テストBの中 - ${value}`);
        value = 'BB';
    });

    describe('小世界', function () {
        console.log(`>> 小世界の始まり - ${value}`);

        it('小世界のテスト', function () {
            console.log(`小世界の中 - ${value}`);
            value = 'SS';
        });

        console.log(`>> 小世界の終わり - ${value}`);
    })

    console.log(`> B-Cの中間 - ${value}`);
    value = 'C'

    it('テストC', function () {
        console.log(`テストCの中 - ${value}`);
        value = 'CC';
    });

    console.log(`> 世界#1の終わり - ${value}`);
});

console.log(`世界の中間 - ${value}`);

describe('世界#2', function () {
    console.log(`> 世界#2の始まり - ${value}`);
    value = 'D';

    it('テストD', function () {
        console.log(`テストDの中 - ${value}`);
        value = 'DD';
    });

    console.log(`> D-Eの中間 - ${value}`);
    value = 'E';

    it('テストE', function () {
        console.log(`テストEの中身 - ${value}`);
        value = 'EE';
    });

    console.log(`> 世界#2の終わり - ${value}`);
});

console.log(`世界の終わり - ${value}`);

/*実行結果:VSCode-PowerShell

    test> mocha test4.js

世界の始まり
> 世界#1の始まり - !!  //  describe('世界#1', function () {}の中の命令が先にが実行される
                      // let value = '!!' :グローバル変数を参照している

> A-Bの中間 - A        // itを飛び越えて、次のconsole.log(`> A-Bの中間 - ${value}`);が実行される
                      // ここの${value}はこの前の、console.log(`> 世界#1の始まり - ${value}`);の後の
                      // value = 'A';であるから    

>> 小世界の始まり - B  // 次のdescribe(''小世界', function () {}の中の命令が先にが実行される
                      // console.log(`>> 小世界の始まり - ${value}`);が実行される
                      // console.log(`> A-Bの中間 - ${value}`);の後の
                      // value = 'B';が使われる

>> 小世界の終わり - B  // 次は、it('小世界のテスト', function () {}の次の
                      // console.log(`>> 小世界の終わり - ${value}`);が実行される
                      // console.log(`> A-Bの中間 - ${value}`);の後の
                      // value = 'B';が使われる 

> B-Cの中間 - B       // 次はdescribe('小世界', function () {}の下の
                      // console.log(`> B-Cの中間 - ${value}`);が実行され、
                      // value = 'C'が設定される
    
> 世界#1の終わり - C   // 次は、it('テストC', function () {}の次の
                      // console.log(`> 世界#1の終わり - ${value}`);が実行される
                      // console.log(`> B-Cの中間 - ${value}`);の後の
                      // value = 'c';が使われる 

世界の中間 - C         // console.log(`世界の中間 - ${value}`);が実行される
                      // console.log(`> B-Cの中間 - ${value}`);の後の
                      // value = 'C';が使われる 

> 世界#2の始まり - C   // describe('世界#2', function () {}が実行される
                      // console.log(`> 世界#2の始まり - ${value}`);が実行され,
                      // valueに 'D'が設定される

> D-Eの中間 - D        // 次は、it('テストD', function () {}の次の
                      // console.log(`> D-Eの中間 - ${value}`);が実行される
                      // ${value}`)はその前のconsole.log(`> 世界#2の始まり - ${value}`);の
                      // 後に設定されるvalue = 'D';が使われる
                      // valueに'E'が設定される

> 世界#2の終わり - E   // 次は、it('テストE', function () {}の次の
                      // console.log(`> 世界#2の終わり - ${value}`);が実行される
                      // ${value}`)はその前のconsole.log(`> D-Eの中間 - ${value}`);の              
                      // 後に設定されるvalue = 'E';が使われる
                      
世界の終わり - E       // その下に進んで、console.log(`世界の終わり - ${value}`);が実行される
                      // ${value}`)はその前のconsole.log(`> D-Eの中間 - ${value}`);の              
                      // 後に設定されるvalue = 'E';が使われる

  世界#1              // そのあとに、describe('世界#1', function () {}のitが実行されていく

テストAの中 - E       // itの実行、console.log(`テストAの中 - ${value}`);の${value}は                    
    ✔ テストA        // ここに来る前に実行された、世界の終わり - E
                     // (console.log(`> D-Eの中間 - ${value}`);のvalue = 'E';)
                     // 実行結果の「テストA」にチェックマークが入っているので正常である
                     // ことを示している
                    
テストBの中 - AA      // この後残りの「it」を実行していく、${value}はその前の「it」の値(AA)である
    ✔ テストB        // 実行結果の「テストB」にチェックマークが入っているので正常である
                     // ことを示している

テストCの中 - BB      // it('テストB', function () {}の後に、
    ✔ テストC        // describe('小世界', function () {}の「it」が来るが
                     // 先に、describe('世界#1', function () {}のすべての「it」を
                     // 処理してから、describe('小世界', function () {}の「it」を処理する
                    
                     // ${value}はその前の「it」の値(BB)である
                    
                     // 実行結果の「テストC」にチェックマークが入っているので正常である
                     // ことを示している
                    
    小世界            // describe('世界#1', function () {}の命令と「it」が終わったので
                     // そのあとに、describe('小世界', function () {})のitが実行されていく

小世界の中 - CC       // itの実行、console.log(`小世界の中 - ${value}`);の${value}は                    
    ✔ 小世界のテスト  // ここに来る前に実行された、console.log(`テストCの中 - ${value}`);の
                     // value = 'CC';である
                  
                     // 実行結果の「小世界のテスト」にチェックマークが入っているので正常である
                     // ことを示している
      

  世界#2             // describe('世界#1', function () {}の「it」と
                     //「describe('小世界', function () {}」の実行が終わったので、
                     // 次のdescribe('世界#2', function () {}の「it」の実行に移る
                    
テストDの中 - SS      // console.log(`テストDの中 - ${value}`); の${value}は
    ✔ テストD        // その前の処理('小世界のテスト')で設定された'SS'である
                     // 実行結果の「テストD」にチェックマークが入っているので正常である
                     // ことを示している

テストEの中身 - DD    // console.log(`テストEの中 - ${value}`); の${value}は
    ✔ テストE        // その前の処理('テストD')で設定された'DD'である
                     // 実行結果の「テストE」にチェックマークが入っているので正常である
                     // ことを示している
    


  6 passing (32ms)


  // describeとitでコールバックの実行タイミングが異なることが分かる。
  // また各itの中で参照している変数valueの値は、
  // 直前に外側のdescribeの中で定義されたものとは異なっている。
  // (グローバル変数を参照しているので、valueの更新はコールバックの実行順に更新・引継されることになる。)
*/