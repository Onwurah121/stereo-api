import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { StereoMediaModule } from './stereo-media/stereo-media.module';
import { dataSourceOptions } from 'db/db-source';

@Module({
  imports: [UsersModule, StereoMediaModule, TypeOrmModule.forRoot(dataSourceOptions)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
