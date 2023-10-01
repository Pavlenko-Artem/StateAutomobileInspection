import { IsNumber, IsString } from 'class-validator';

export class DriverDto {
	@IsString()
	driverLicense: string;

	@IsString()
	surname: string;

	@IsString()
	name: string;

	@IsString()
	patronymic: string;

	@IsString()
	address: string;

	@IsNumber()
	phone: number;
}
