import { Test, TestingModule } from '@nestjs/testing';
import { FindOddIntService } from './find-odd-int.service';

describe('FindOddIntService', () => {
  let service: FindOddIntService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FindOddIntService],
    }).compile();

    service = module.get<FindOddIntService>(FindOddIntService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('FindOddInt', () => {
    it('should find the odd integer in [7]', () => {
      const numbers = [7];
      const result = service.findOddInt(numbers);
      expect(result).toBe('7 occurs 1 time (which is odd)');
    });

    it('should find the odd integer in [0]', () => {
      const numbers = [0];
      const result = service.findOddInt(numbers);
      expect(result).toBe('0 occurs 1 time (which is odd)');
    });

    it('should find the odd integer in [1,1,2]', () => {
      const numbers = [1, 1, 2];
      const result = service.findOddInt(numbers);
      expect(result).toBe('2 occurs 1 time (which is odd)');
    });

    it('should find the odd integer in [0,1,0,1,0]', () => {
      const numbers = [0, 1, 0, 1, 0];
      const result = service.findOddInt(numbers);
      expect(result).toBe('0 occurs 3 times (which is odd)');
    });

    it('should find the odd integer in [1,2,2,3,3,3,4,3,3,3,2,2,1]', () => {
      const numbers = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
      const result = service.findOddInt(numbers);
      expect(result).toBe('4 occurs 1 time (which is odd)');
    });

    it('should return "No odd" when there are no odd integers', () => {
      const numbers = [2, 4, 6, 8, 10];
      const result = service.findOddInt(numbers);
      expect(result).toBe('No odd');
    });
  });
});
