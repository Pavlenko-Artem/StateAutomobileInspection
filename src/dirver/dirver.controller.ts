import { Controller } from '@nestjs/common';
import { DirverService } from './dirver.service';

@Controller('dirver')
export class DirverController {
  constructor(private readonly dirverService: DirverService) {}
}
