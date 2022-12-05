import { readFileSync } from 'fs';
import { resolve } from 'path';

export const day05p2 = (input: string) => {
  const lines = input.split('\n');

  const crateStrings = [
    'FCJPHTW',
    'GRVFZJBH',
    'HPTR',
    'ZSNPHT',
    'NVFZHJCD',
    'PMGFWDZ',
    'MVZWSJDP',
    'NDS',
    'DZSFM',
  ];

  const crates = crateStrings.map((stack) => stack.split(''));

  for (let i = 0; i < lines.length; i++) {
    const words = lines[i].split(' ');
    const n = Number(words[1]);
    const from = Number(words[3]);
    const to = Number(words[5]);

    crates[to - 1].push(...crates[from - 1].splice(-n));
  }

  return crates.map((stack) => stack[stack.length - 1]).join('');
};

const input = readFileSync(resolve(__dirname, 'input'), 'utf-8');
console.log(day05p2(input)); // ZFSJBPRFP
