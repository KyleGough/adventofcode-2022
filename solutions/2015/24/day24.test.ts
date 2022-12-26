import { day24p1 } from './p1';
import { day24p2 } from './p2';
import { getPuzzle } from '@utilities/getPuzzle';

const { example, input } = getPuzzle(__dirname);

describe('Day 24 Puzzle', () => {
  test('Part 1 Example', () => {
    expect(day24p1(example)).toBe(99);
  });

  test('Part 1 Input', () => {
    expect(day24p1(input)).toBe(10_723_906_903);
  });

  test('Part 2 Example', () => {
    expect(day24p2(example)).toBe(44);
  });

  test('Part 2 Input', () => {
    expect(day24p2(input)).toBe(74_850_409);
  });
});
