import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';
import { StateService } from '../services/state.service';
import { State } from '../models/state.schema';
import { ApiKeyAuthGuard } from 'src/auth/key';
import { CreateStateDto } from '../dtos/state.dto';

@Controller('states')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @UseGuards(ApiKeyAuthGuard)
  @Post('new')
  create(@Body() createStateDto: CreateStateDto): Promise<State> {
    return this.stateService.create(createStateDto);
  }

  @Get()
  findAll(): Promise<State[]> {
    return this.stateService.findAll();
  }

  @Get('search')
  search(@Query('q') query: string): Promise<State[]> {
    return this.stateService.search(query);
  }

  @Get('region/search')
  searchByRegion(@Query('q') query: string): Promise<State[]> {
    return this.stateService.findByRegion(query);
  }
}
