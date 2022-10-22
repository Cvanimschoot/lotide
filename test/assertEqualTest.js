const assert = require('chai').assert;
let assertEqual = require('../index')
assertEqual = assertEqual.assertEqual;

describe("#assertEqual", () => {
  it('returns false for ("Lighthouse Labs", "Bootcamp")', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
  });
  it('returns true for ("Lighthouse Labs", "Bootcamp")', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Lighthouse Labs"), true);
  });
  it('returns true for (1, 1)', () => {
    assert.strictEqual(assertEqual(1,1), true);
  });
  it('returns false for (1, 21)', () => {
    assert.strictEqual(assertEqual(1,21), false);
  });
});