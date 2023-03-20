import { Test, TestingModule } from '@nestjs/testing';
import { StereoMediaService } from './stereo-media.service';

describe('StereoMediaService', () => {
  let service: StereoMediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StereoMediaService],
    }).compile();

    service = module.get<StereoMediaService>(StereoMediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
