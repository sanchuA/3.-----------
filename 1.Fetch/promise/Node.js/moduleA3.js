// 複数のエクスポート
const moduleB3 = require('./moduleB3.js')

console.log(moduleB3.hello('wakuwaku bank'))
console.log(moduleB3.goodbye('wakuwaku bank'))


// 実行結果：
//  Node.js> node moduleA3.js
//  Hello wakuwaku bank
//  Goodbye wakuwaku bank