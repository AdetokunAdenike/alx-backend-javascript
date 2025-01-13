const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1 and 3', () => {
    const result = calculateNumber(1, 3);
    assert.strictEqual(result, 4);
  });

  it('should round 3.7 up and return 5 when inputs are 1 and 3.7', () => {
    const result = calculateNumber(1, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should round 1.2 down and return 5 when inputs are 1.2 and 3.7', () => {
    const result = calculateNumber(1.2, 3.7);
    assert.strictEqual(result, 5);
  });

  it('should round 1.5 up and return 6 when inputs are 1.5 and 3.7', () => {
    const result = calculateNumber(1.5, 3.7);
    assert.strictEqual(result, 6);
  });

  it('should round both inputs and handle negative numbers correctly', () => {
    const result = calculateNumber(-1.4, -3.6);
    assert.strictEqual(result, -5);
  });

  it('should handle zero correctly', () => {
    const result = calculateNumber(0, 0);
    assert.strictEqual(result, 0);
  });

  it('should handle large numbers correctly', () => {
    const result = calculateNumber(1234.56, 7890.12);
    assert.strictEqual(result, 9125);
  });
});
