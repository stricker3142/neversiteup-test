import { Injectable } from '@nestjs/common';

@Injectable()
export class FindOddIntService {
  findOddInt(numbers: number[]): string {
    const numberSet = new Set(numbers);
    if (numberSet.size === numbers.length && numbers.length > 1) {
      return 'No odd';
    }

    const occurrences = new Map<number, number>();

    for (const num of numbers) {
      occurrences.set(num, (occurrences.get(num) || 0) + 1);
    }

    for (const [num, count] of occurrences) {
      if (count % 2 !== 0) {
        return `${num} occurs ${count} time${count > 1 ? 's' : ''} (which is odd)`;
      }
    }
  }
}
