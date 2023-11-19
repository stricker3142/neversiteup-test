import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermutationsModule } from './permutations/permutations.module';
import { FindOddIntModule } from './find-odd-int/find-odd-int.module';
import { CountSmileyFacesModule } from './count-smiley-faces/count-smiley-faces.module';

@Module({
  imports: [PermutationsModule, FindOddIntModule, CountSmileyFacesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
