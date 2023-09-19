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

	@Get('info')
	@Render('info')
	info() {
		return {
			info: 'Инструментальные средства информационных систем',
			author:
				'Лабораторные работы выполнил студент группы ВИАС41 Павленко Артём Сергеевич'
		};
	}
}
