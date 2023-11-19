import { Test, TestingModule } from '@nestjs/testing';
import { PermutationsService } from './permutations.service';

describe('PermutationsService', () => {
  let service: PermutationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermutationsService],
    }).compile();

    service = module.get<PermutationsService>(PermutationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('genPermutations', () => {
    it('gen permutations without dup', () => {
      const inputStr = 'abc';
      const result = service.genPermutations(inputStr);
      const expected = ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'];
      expect(new Set(result)).toEqual(new Set(expected));
    });
  });
});
