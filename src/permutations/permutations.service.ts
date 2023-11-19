import { Injectable } from '@nestjs/common';

@Injectable()
export class PermutationsService {
  genPermutations(inputStr: string): string[] {
    const result: Set<string> = new Set();

    const gen = (str: string, current: string = ''): void => {
      if (str.length === 0) {
        result.add(current);
        return;
      }

      for (let i = 0; i < str.length; i++) {
        const remain = str.slice(0, i) + str.slice(i + 1);
        gen(remain, current + str[i]);
      }
    };

    gen(inputStr);

    return Array.from(result);
  }
}
