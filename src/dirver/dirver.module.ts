import { Module } from '@nestjs/common';
import { DirverService } from './dirver.service';
import { DirverController } from './dirver.controller';

@Module({
  controllers: [DirverController],
  providers: [DirverService]
})
export class DirverModule {}
