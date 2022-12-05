import { readFileSync } from 'fs';
import { resolve } from 'path';

export const day01p2 = (input: string) => {
  const items = input.split('\n\n');

  const calorieList = items.map((item: string) =>
    item
      .split('\n')
      .map((carlorie) => Number(carlorie))
      .reduce((prev, curr) => prev + curr, 0)
  );

  const [c1, c2, c3] = calorieList.sort((a, b) => b - a).splice(0, 3);

  return c1 + c2 + c3;
};

const input = readFileSync(resolve(__dirname, 'input'), 'utf-8');
console.log(day01p2(input)); // 206643
