import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DirverModule } from './dirver/dirver.module';

@Module({
	imports: [DirverModule],
	controllers: [AppController],
	providers: [AppService]
})
export class AppModule {}
