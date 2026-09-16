const assert = require("node:assert/strict");
const calcFare = require("./ai-dev.js");

const testCases = [
  { distance: 0, expected: 0 },
  { distance: -1, expected: 0 },
  { distance: "2", expected: 0 },
  { distance: 2, expected: 10 },
  { distance: 2.1, expected: 12 },
  { distance: 4, expected: 14 },
  { distance: 4.1, expected: 16 },
  { distance: NaN, expected: 0 },
  { distance: Infinity, expected: 0 },
];

for (const { distance, expected } of testCases) {
  assert.equal(calcFare(distance), expected);
}

console.log("All calcFare tests passed");
