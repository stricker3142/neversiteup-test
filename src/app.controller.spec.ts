import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PermutationsModule } from './permutations/permutations.module';
import { FindOddIntModule } from './find-odd-int/find-odd-int.module';
import { CountSmileyFacesModule } from './count-smiley-faces/count-smiley-faces.module';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [PermutationsModule, FindOddIntModule, CountSmileyFacesModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
