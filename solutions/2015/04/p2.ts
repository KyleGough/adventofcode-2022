import { getPuzzle } from '@utilities/getPuzzle';
import { run } from '@utilities/run';
import md5 from 'md5';

export const day04p2 = (input: string) => {
  let count = 1;
  while (count < 10_000_000) {
    const hash = md5(`${input}${count}`);
    if (hash.slice(0, 6) === '000000') {
      return count;
    }
    count++;
  }
};

const input = getPuzzle(__dirname).input;
run(() => day04p2(input)); // 9962624
