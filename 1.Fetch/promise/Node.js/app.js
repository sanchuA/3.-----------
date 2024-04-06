const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.listen('3000', () => {
    console.log('Application started');
});

/*実行結果:Google Chrome-console

  hello

  */
