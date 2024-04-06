// hello_server.js:最初のWebサーバーアプリケーション
// ref:http://node.js.org/api/synopsis.html

// constは定数（インスタンス）
const http = require('http');    // httpモジュールを呼び出し

const hostname = '127.0.0.1';    // ローカルホスト
const port = 3000;               // ポート番号

// httpサーバーインスタンス生成
const server = http.createServer((req,res) => {
  res.statusCode = 200;          // 正常動作コード
  res.setHeader('Content-Type','text/plain')  // ヘッダー
  res.end('Hellow, World!\n');                // コンテンツ本体
});

// Webサーバとして待機状態に
server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ' :' + port + ' /');
})

/*作成後，先ほどと同様に，コンソール画面をソースコードのあるところを
  カレントフォルダとして開き，nodeコマンドで"hellow_server.js"を
  下記のようにして実行して下さい。

  >node hellow_server.js

  サーバですので，実行後は常にブラウザを待つ状態でポーリングします。
  
  終了するには[CTRL+C]でnodeコマンドごと強制的にプロセス停止して下さい。

  起動したら，適当なブラウザを開き，アドレス欄に"localhost:3000"もしくは"127.0.0.1:3000"と打ち込み，
  下記の表示が得られることを確認して下さい。

  c:\Users\0hc49\AppData\Local\Temp\hellow_server_run_browser.png

*/
