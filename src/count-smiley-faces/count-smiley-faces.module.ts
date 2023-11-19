import { Module } from '@nestjs/common';
import { CountSmileyFacesService } from './count-smiley-faces.service';

@Module({
  providers: [CountSmileyFacesService],
  exports: [CountSmileyFacesService],
})
export class CountSmileyFacesModule {}
