import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CacheTTL, CacheKey } from '@nestjs/cache-manager';
import { Model } from 'mongoose';
import { State } from '../models/state.schema';
import { CreateStateDto } from '../dtos/state.dto';
import { Region } from '../models/region.schema';

@Injectable()
export class StateService {
  constructor(
    @InjectModel(State.name) private stateModel: Model<State>,
    @InjectModel(Region.name) private regionModel: Model<Region>,
  ) {}

  async create(createStateDto: CreateStateDto): Promise<State> {
    const region = await this.regionModel
      .findById(createStateDto.region)
      .exec();
    if (!region) {
      throw new NotFoundException(
        `Region with id ${createStateDto.region} not found`,
      );
    }
    const createState = { ...createStateDto, region };
    const createdState = new this.stateModel(createState);
    return createdState.save();
  }

  @CacheTTL(60 * 60)
  async findAll(): Promise<State[]> {
    return this.stateModel.find().populate('region').exec();
  }

  @CacheTTL(60 * 60)
  @CacheKey('state-region')
  async findByRegion(regionName: string): Promise<State[]> {
    return this.stateModel
      .find({ 'region.name': regionName })
      .populate('region')
      .exec();
  }

  @CacheTTL(60 * 60)
  @CacheKey('state-search')
  async search(query: string): Promise<State[]> {
    return this.stateModel
      .find({ name: new RegExp(query, 'i') })
      .populate('region')
      .exec();
  }
}
