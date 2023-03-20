import { Module } from '@nestjs/common';
import { StereoMediaService } from './stereo-media.service';
import { StereoMediaController } from './stereo-media.controller';

@Module({
  controllers: [StereoMediaController],
  providers: [StereoMediaService]
})
export class StereoMediaModule {}
