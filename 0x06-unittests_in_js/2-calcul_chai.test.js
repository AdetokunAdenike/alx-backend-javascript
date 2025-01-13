import { expect } from 'chai';
import calculateNumber from './2-calcul_chai.js';

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should return -5 when inputs are -1.4 and -4.5', () => {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should return 3 when inputs are -1.4 and -4.5', () => {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });
  });

  describe('DIVIDE', () => {
    it('should return 0.2 when inputs are 1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.be.closeTo(0.2, 0.001);
    });

    it('should return "Error" when dividing by 0', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return -0.2 when inputs are -1.4 and 4.5', () => {
      expect(calculateNumber('DIVIDE', -1.4, 4.5)).to.be.closeTo(-0.2, 0.001);
    });
  });

  describe('Invalid operation', () => {
    it('should throw an error for invalid operation type', () => {
      expect(() => calculateNumber('INVALID', 1.4, 4.5)).to.throw('Invalid operation type');
    });
  });
});
