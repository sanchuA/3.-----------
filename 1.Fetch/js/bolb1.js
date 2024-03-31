/*
構文
js

toBlob(callback)
toBlob(callback, type)
toBlob(callback, type, quality)

引数

callback

  単一の引数として結果のBlobオブジェクトを受け取るコールバック関数です。

  何らかの理由で画像が作成できなかった場合はnullが渡されることがあります。

type省略可

    文字列で、画像形式を表します。
    既定の形式は image/png です。
    この形式は、指定された形式に対応していない場合にも使用されます。

quality 省略可

  0 から 1 の間の数値であり、作成する画像が非可逆圧縮（image / jpeg や image / webp など）
  であった場合の画像品質を示します。

  このオプションが指定されなかったり、許可されている範囲外の数値であったりした場合は、
  ユーザーエージェントは既定の品質値を使用します。

返値
  なし(undefined)。

例外

SecurityError
  キャンバスのビットマップがオリジンクリーンではありません。

  そのコンテンツの少なくとも一部が、文書そのものが読み込まれたサイトとは
  別のサイトから読み込まれたものであるか、その可能性があります。

例:キャンバスに表示されている画像を取得する

一度キャンバスにコンテンツを描画したら、
これを何らかのサポートされている画像フォーマットに変換できます。

たとえば、下記のコードスニペットは、IDが"canvas"の< canvas >要素を取得して、
PNG 画像としてコピーしてから、文書に新しい< img >要素を追加しています。

この画像ソースはキャンバスを使用して生成されたものです。*/

const canvas = document.getElementById("canvas");

canvas.toBlob((blob) => {

  const newImg = document.createElement("img");

  const url = URL.createObjectURL(blob);

  newImg.onload = () => {

    // もうblobを読み取る必要は無いので、無効化します。
    URL.revokeObjectURL(url);

  };

  newImg.src = url;

  document.body.appendChild(newImg);

});

/*ここでは、PNG 画像を生成していることに注意してください。

  toBlob()の呼び出しに2つ目の引数を追加した場合、

  ユーザーエージェントが対応している画像の種類を指定できます。
  たとえば、次のようにして JPEG 形式の画像を取得できます。

  canvas.toBlob(

    (blob) => {
      // …
    },

    "image/jpeg",
      0.95,
  ); // JPEG at 95% quality */
