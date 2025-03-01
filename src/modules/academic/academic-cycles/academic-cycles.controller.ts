import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcademicCyclesService } from './academic-cycles.service';
import { CreateAcademicCycleDto } from './dto/create-academic-cycle.dto';
import { UpdateAcademicCycleDto } from './dto/update-academic-cycle.dto';

@Controller('academic-cycles')
export class AcademicCyclesController {
  constructor(private readonly academicCyclesService: AcademicCyclesService) {}

  @Post()
  create(@Body() createAcademicCycleDto: CreateAcademicCycleDto) {
    return this.academicCyclesService.create(createAcademicCycleDto);
  }

  @Get()
  findAll() {
    return this.academicCyclesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academicCyclesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcademicCycleDto: UpdateAcademicCycleDto) {
    return this.academicCyclesService.update(+id, updateAcademicCycleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academicCyclesService.remove(+id);
  }
}
