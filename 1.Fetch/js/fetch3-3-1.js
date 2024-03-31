// Promiseのまま扱う際のfetchの使い方
function fetchNormal() {
  // 気象庁の今日の東京の天気API(JSON)
  const url = 'https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json';

  const promise = fetch(url);
  promise
    .then(response => response.json())
    .then(jsondata => {
      showResult("result: " + JSON.stringify(jsondata));
    });
}
