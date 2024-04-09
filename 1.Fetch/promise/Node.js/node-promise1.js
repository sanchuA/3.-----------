var Promise = require('promise');

var promise = new Promise(function (resolve, reject) {

  get('http://www.techacademy.jp', function (err, res) {

    if (err) reject(err);

    else resolve(res);

  });
});

promise().then(function() {

  alert('30歳からのプログラマー転職');

  }, function(err) {

  alert(err.message);
  
});