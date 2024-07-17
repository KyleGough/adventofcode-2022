import { day04p1 } from './p1';
import { day04p2 } from './p2';
import { getPuzzle } from '@utilities/getPuzzle';

const { example, input } = getPuzzle(__dirname);

describe('Day 04 Puzzle', () => {
  test('Part 1 Example', () => {
    expect(day04p1(example)).toBe(2);
  });

  test('Part 1 Input', () => {
    expect(day04p1(input)).toBe(192);
  });

  test('Part 2 Example', () => {
    expect(day04p2(example)).toBe(2);
  });

  test('Part 2 Input', () => {
    expect(day04p2(input)).toBe(101);
  });
});
