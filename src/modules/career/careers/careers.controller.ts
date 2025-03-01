import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CareersService } from './careers.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { IdValidationPipe } from 'src/common/pipes/id-validation/id-validation.pipe';
import { UpdateStatusCareerDto } from './dto/update-status-career.dto';

@Controller('careers')
export class CareersController {
  constructor(private readonly careersService: CareersService) {}

  @Post()
  create(@Body() createCareerDto: CreateCareerDto) {
    return this.careersService.create(createCareerDto);
  }

  @Get()
  findAll() {
    return this.careersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', IdValidationPipe) id: number) {
    return this.careersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', IdValidationPipe) id: number,
    @Body() updateCareerDto: UpdateCareerDto,
  ) {
    return this.careersService.update(id, updateCareerDto);
  }

  @Patch('update-status/:id')
  updateStatus(
    @Param('id', IdValidationPipe) id: number,
    @Body() updateStatusCareerDto: UpdateStatusCareerDto,
  ) {
    return this.careersService.updateStatus(id, updateStatusCareerDto);
  }

  @Delete(':id')
  remove(@Param('id', IdValidationPipe) id: number) {
    return this.careersService.remove(id);
  }
}
