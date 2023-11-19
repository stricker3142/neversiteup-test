import { Injectable } from '@nestjs/common';

@Injectable()
export class CountSmileyFacesService {
  countSmileys(arr: string[]): number {
    const validSmileyRegex = /^[:;][-~]?[)D]$/;

    let count = 0;

    for (const face of arr) {
      if (validSmileyRegex.test(face)) {
        count++;
      }
    }

    return count;
  }
}
