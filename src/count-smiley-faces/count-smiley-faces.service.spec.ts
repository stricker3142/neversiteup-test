import { Test, TestingModule } from '@nestjs/testing';
import { CountSmileyFacesService } from './count-smiley-faces.service';

describe('CountSmileyFacesService', () => {
  let service: CountSmileyFacesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountSmileyFacesService],
    }).compile();

    service = module.get<CountSmileyFacesService>(CountSmileyFacesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return the correct count of smiley faces', () => {
    const faces1 = [':)', ';(', ';}', ':-D'];
    const faces2 = [';D', ':-(', ':-)', ';~)'];
    const faces3 = [';]', ':[', ';*', ':$', ';-D'];

    expect(service.countSmileys(faces1)).toBe(2);
    expect(service.countSmileys(faces2)).toBe(3);
    expect(service.countSmileys(faces3)).toBe(1);
  });

  it('should return 0 for an empty array', () => {
    const emptyArray: string[] = [];
    expect(service.countSmileys(emptyArray)).toBe(0);
  });
});
