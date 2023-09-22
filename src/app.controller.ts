import { Controller, Get, Post, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	@Render('index')
	root() {
		return { message: 'Hello world!' };
	}

	@Get('lab1')
	@Render('lab1')
	lab1() {
		return { message: 'Лабораторная работа 1!' };
	}

	@Get('lab2')
	@Render('lab2')
	lab2() {
		return { message: 'Лабораторная работа 2!' };
	}

	@Get('lab3')
	@Render('lab3')
	lab3() {
		return { message: 'Лабораторная работа 3!' };
	}

	@Get('lab4')
	@Render('lab4')
	lab4() {
		return { message: 'Лабораторная работа 4!' };
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

	@Post('lab1')
	@Render('lab1')
	addDriver() {
		function handleFormSubmit(event: { preventDefault: () => void }) {
			// Просим форму не отправлять данные самостоятельно
			event.preventDefault();
			console.log('Отправка!');
		}

		const applicantForm = document.getElementById('mars-once');
		applicantForm.addEventListener('submit', handleFormSubmit);
		return {
			info: 'Инструментальные средства информационных систем',
			author:
				'Лабораторные работы выполнил студент группы ВИАС41 Павленко Артём Сергеевич'
		};
	}
}
