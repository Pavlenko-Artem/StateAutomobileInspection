import { IsNumber, IsString } from 'class-validator';

export class DriverDto {
	@IsNumber()
	id: string;

	@IsString()
	surname: string;

	@IsString()
	name: string;

	@IsString()
	patronymic: string;

	@IsString()
	address: string;

	@IsString()
	phone: string;
}
