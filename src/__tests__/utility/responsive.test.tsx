import { rw, rh, rf, rbr, rbw, fontSize } from '../../utility/responsive';

describe('Responsive Utility Functions', () => {
  it('rw calculates responsive width correctly', () => {
    expect(rw(50)).toBe(188);
  });

  it('rh calculates responsive height correctly', () => {
    expect(rh(50)).toBe(406);
  });

  it('rf respects min/max limits and scales based on width', () => {
    expect(rf(16)).toBe(16); // Design width is 375 so 16 * 1 = 16
    expect(rf(50, 20, 40)).toBe(40); // max cap
    expect(rf(2, 10)).toBe(10); // min cap
  });

  it('rbr scales border radius with optional cap', () => {
    expect(rbr(8)).toBe(8);
    expect(rbr(20, 10)).toBe(10); // capped
  });

  it('rbw returns crisp width', () => {
    expect(rbw(0.5)).toBe(1);
    expect(rbw(1.5)).toBe(2);
    expect(rbw(4)).toBe(4); // scaled
  });

  it('fontSize scales based on height with iPhone X logic', () => {
    const result = fontSize(2); // (812 - 78) * 2%
    expect(result).toBeCloseTo(Math.round(((812 - 78) * 2) / 100));
  });
});
