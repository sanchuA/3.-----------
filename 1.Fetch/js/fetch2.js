"use strict";

(async () => {
  let user = {
    name: 'John',
    surname: 'Smith'
  };

  let response = await fetch('./js/fetch2.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(user)
  });

  let result = await response.json();
  alert(result.message);
})()
