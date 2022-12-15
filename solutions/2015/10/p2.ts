import { getPuzzle } from '@utilities/getPuzzle';
import { lookAndSay } from './day10.helper';

export const day10p2 = (input: string) => {
  let result = input;
  for (let i = 0; i < 50; i++) {
    result = lookAndSay(result);
  }

  return result.length;
};

const input = getPuzzle(__dirname).input;
console.log(day10p2(input)); // 6989950
