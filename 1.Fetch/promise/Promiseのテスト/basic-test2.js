const assert = require("assert");
it("should use `done` for test?", (done) => {
  const promise = Promise.resolve();
  promise.then((value) => {
      assert(false);
  }).then(done, done);
});