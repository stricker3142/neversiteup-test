import { Module } from '@nestjs/common';
import { PermutationsService } from './permutations.service';

@Module({
  providers: [PermutationsService],
  exports: [PermutationsService],
})
export class PermutationsModule {}
