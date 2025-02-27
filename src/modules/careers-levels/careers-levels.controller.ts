import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CareersLevelsService } from './careers-levels.service';
import { CreateCareersLevelDto } from './dto/create-careers-level.dto';
import { UpdateCareersLevelDto } from './dto/update-careers-level.dto';
import { IdValidationPipe } from 'src/common/pipes/id-validation/id-validation.pipe';

@Controller('careers-levels')
export class CareersLevelsController {
  constructor(private readonly careersLevelsService: CareersLevelsService) {}

  @Post()
  create(@Body() createCareersLevelDto: CreateCareersLevelDto) {
    return this.careersLevelsService.create(createCareersLevelDto);
  }

  @Get()
  findAll() {
    return this.careersLevelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', IdValidationPipe) id: number) {
    return this.careersLevelsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', IdValidationPipe) id: number,
    @Body() updateCareersLevelDto: UpdateCareersLevelDto,
  ) {
    return this.careersLevelsService.update(id, updateCareersLevelDto);
  }

  @Delete(':id')
  remove(@Param('id', IdValidationPipe) id: number) {
    return this.careersLevelsService.remove(id);
  }
}
