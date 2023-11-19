import { Module } from '@nestjs/common';
import { FindOddIntService } from './find-odd-int.service';

@Module({
  providers: [FindOddIntService],
  exports: [FindOddIntService],
})
export class FindOddIntModule {}
