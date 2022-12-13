import { day12p1 } from './p1';
import { day12p2 } from './p2';
import { getPuzzle } from '@utilities/getPuzzle';

const { example, input } = getPuzzle(__dirname);

describe('Day 12 Puzzle', () => {
  test('Part 1 Example', () => {
    expect(day12p1(example)).toBe(31);
  });

  test('Part 1 Input', () => {
    expect(day12p1(input)).toBe(391);
  });

  test('Part 2 Example', () => {
    expect(day12p2(example)).toBe(29);
  });

  test('Part 2 Input', () => {
    expect(day12p2(input)).toBe(386);
  });
});
