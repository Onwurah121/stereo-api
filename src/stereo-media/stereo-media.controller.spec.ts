import { Test, TestingModule } from '@nestjs/testing';
import { StereoMediaController } from './stereo-media.controller';
import { StereoMediaService } from './stereo-media.service';

describe('StereoMediaController', () => {
  let controller: StereoMediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StereoMediaController],
      providers: [StereoMediaService],
    }).compile();

    controller = module.get<StereoMediaController>(StereoMediaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
