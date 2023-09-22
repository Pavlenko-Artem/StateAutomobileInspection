import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { join } from 'path';
import * as hbs from 'hbs';
import * as hbsUtils from 'hbs-utils';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule);

	app.useStaticAssets(join(__dirname, '..', 'public'));
	app.setBaseViewsDir(join(__dirname, '..', 'views'));
	hbs.registerPartials(join(__dirname, '..', 'views/partials'));
	hbsUtils(hbs).registerWatchedPartials(
		join(__dirname, '..', 'views/partials')
	);
	app.setViewEngine('hbs');

	await app.listen(3000);
}

bootstrap();
