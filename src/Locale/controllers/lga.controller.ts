import { Controller, Get, Query, Param, UseGuards, Post, Body } from '@nestjs/common';
import { LGAService } from '../services/lga.service';
import { LGA } from '../models/lga.schema';
import { ApiKeyAuthGuard } from 'src/auth/key';
import { CreateLGADto } from '../dtos/lga.dto';

@Controller('lgas')
export class LGAController {
  constructor(private readonly lgaService: LGAService) {}

  @UseGuards(ApiKeyAuthGuard)
  @Post('new')
  create(@Body() createLGADto: CreateLGADto): Promise<LGA> {
    return this.lgaService.create(createLGADto);
  }

  @Get()
  findAll(): Promise<LGA[]> {
    return this.lgaService.findAll();
  }

  @Get('search')
  search(@Query('q') query: string): Promise<LGA[]> {
    return this.lgaService.search(query);
  }

  @Get('state/:stateName')
  findByState(@Param('stateName') stateName: string): Promise<LGA[]> {
    return this.lgaService.findByState(stateName);
  }
}