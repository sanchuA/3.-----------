
// JSONオブジェクト
var obj = {
  "name": "taro",
  "date": "2020-10-25 12:30:18",
  "item": [
    "ラーメン",
    "チャーハン",
    "餃子"
  ]
}

// 空白2文字でインデントして整形出力（インデントの個数：２）
console.log(JSON.stringify(obj, null, 2));
