const test = require("node:test");
const assert = require("node:assert");
const { add, greet } = require("../app");

test("add adds two numbers", () => {
  assert.strictEqual(add(2, 3), 5);
});

test("greet greets by name", () => {
  assert.strictEqual(greet("Sam"), "Hello, Sam!");
});
