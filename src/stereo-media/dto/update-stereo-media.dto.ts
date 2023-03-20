import { PartialType } from '@nestjs/mapped-types';
import { CreateStereoMediaDto } from './create-stereo-media.dto';

export class UpdateStereoMediaDto extends PartialType(CreateStereoMediaDto) {}
