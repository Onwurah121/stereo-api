import { Injectable } from '@nestjs/common';
import { CreateStereoMediaDto } from './dto/create-stereo-media.dto';
import { UpdateStereoMediaDto } from './dto/update-stereo-media.dto';

@Injectable()
export class StereoMediaService {
  create(createStereoMediaDto: CreateStereoMediaDto) {
    return 'This action adds a new stereoMedia';
  }

  findAll() {
    return `This action returns all stereoMedia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stereoMedia`;
  }

  update(id: number, updateStereoMediaDto: UpdateStereoMediaDto) {
    return `This action updates a #${id} stereoMedia`;
  }

  remove(id: number) {
    return `This action removes a #${id} stereoMedia`;
  }
}
