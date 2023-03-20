import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StereoMediaService } from './stereo-media.service';
import { CreateStereoMediaDto } from './dto/create-stereo-media.dto';
import { UpdateStereoMediaDto } from './dto/update-stereo-media.dto';

@Controller('stereo-media')
export class StereoMediaController {
  constructor(private readonly stereoMediaService: StereoMediaService) {}

  @Post()
  create(@Body() createStereoMediaDto: CreateStereoMediaDto) {
    return this.stereoMediaService.create(createStereoMediaDto);
  }

  @Get()
  findAll() {
    return this.stereoMediaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stereoMediaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStereoMediaDto: UpdateStereoMediaDto) {
    return this.stereoMediaService.update(+id, updateStereoMediaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.stereoMediaService.remove(+id);
  }
}
