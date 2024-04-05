// 通常のfetchの使い方
function fetchNormal() {
  // 気象庁の今日の東京の天気API(JSON)
  const url = 'https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json';

  const promise = fetch(url);
  promise
    .then(response => response.json())
    .then(jsondata => {
      const result = document.querySelector("#result");
      result.innerText = JSON.stringify(jsondata);
    });

}

// async/awaitを使ったfetchの使い方
async function fetchAsync() {
  // 気象庁の今日の福井の天気API(JSON)
  const url = 'https://www.jma.go.jp/bosai/forecast/data/overview_forecast/180000.json';

  const data = await fetch(url);
  const jsondata = await data.json();

  const result = document.querySelector("#result");
  result.innerText = JSON.stringify(jsondata);
}

// 結果のクリア
function clearResult() {
  const result = document.querySelector("#result");
  result.innerText = "";
}
