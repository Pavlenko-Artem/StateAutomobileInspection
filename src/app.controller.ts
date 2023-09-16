import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	@Render('index')
	root() {
		return { message: 'Hello world!' };
	}

	@Get('lab')
	@Render('lab1')
	lab() {
		return { message: 'Лабораторная работа 1!' };
	}
}
