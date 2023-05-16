import { Controller, Get, Query, Body, UseGuards, Post } from '@nestjs/common';
import { RegionService } from '../services/region.service';
import { Region } from '../models/region.schema';
import { CreateRegionDto } from '../dtos/region.dto';
import { ApiKeyAuthGuard } from 'src/auth/key';

@Controller('regions')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  @UseGuards(ApiKeyAuthGuard)
  @Post('new')
  create(@Body() createRegionDto: CreateRegionDto): Promise<Region> {
    return this.regionService.create(createRegionDto);
  }

  @Get()
  findAll(): Promise<Region[]> {
    return this.regionService.findAll();
  }

  @Get('search')
  search(@Query('q') query: string): Promise<Region[]> {
    return this.regionService.search(query);
  }
}
