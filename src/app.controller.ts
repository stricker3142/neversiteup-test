import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PermutationsService } from './permutations/permutations.service';
import { FindOddIntService } from './find-odd-int/find-odd-int.service';
import { CountSmileyFacesService } from './count-smiley-faces/count-smiley-faces.service';

@Controller('api')
@ApiTags('api')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly permutationsService: PermutationsService,
    private readonly findOddIntService: FindOddIntService,
    private readonly countSmileyFacesService: CountSmileyFacesService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get Hello World' }) // Add this line
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/permutation/:input')
  @ApiOperation({ summary: 'Get Permutations' })
  getPermutations(@Param('input') input: string): string[] {
    return this.permutationsService.genPermutations(input);
  }

  @Get('/oddint/:input')
  @ApiOperation({ summary: 'Get OddInt' })
  getFindOddInt(@Param('input') input: string): string {
    const parsedNumbers = input.split(',').map(Number);
    return this.findOddIntService.findOddInt(parsedNumbers);
  }

  @Get('/countSmileys/:input')
  @ApiOperation({ summary: 'Get CountSmileys' })
  getCountSmileys(@Param('input') input: string): number {
    const resultArray = input.split(', ').map((str) => str.replace(/'/g, ''));
    return this.countSmileyFacesService.countSmileys(resultArray);
  }
}
