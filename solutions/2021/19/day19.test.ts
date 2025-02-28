import { day19p1 } from './p1';
import { day19p2 } from './p2';
import { getPuzzle } from '@utilities/getPuzzle';

const { example, input } = getPuzzle(__dirname);

describe('Day 19 Puzzle', () => {
  test.skip('Part 1 Example', () => {
    expect(day19p1(example)).toBe(79);
  });

  test.skip('Part 1 Input', () => {
    expect(day19p1(input)).toBe(326);
  });

  test.skip('Part 2 Example', () => {
    expect(day19p2(example)).toBe(3621);
  });

  test.skip('Part 2 Input', () => {
    expect(day19p2(input)).toBe(10630);
  });
});
