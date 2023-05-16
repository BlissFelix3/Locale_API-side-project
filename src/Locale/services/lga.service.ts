import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CacheTTL, CacheKey } from '@nestjs/cache-manager';
import { Model } from 'mongoose';
import { LGA } from '../models/lga.schema';
import { CreateLGADto } from '../dtos/lga.dto';
import { State } from '../models/state.schema';

@Injectable()
export class LGAService {
  constructor(
    @InjectModel(LGA.name) private lgaModel: Model<LGA>,
    @InjectModel(State.name) private stateModel: Model<State>,
  ) {}

  async create(createLGADto: CreateLGADto): Promise<LGA> {
    const state = await this.stateModel.findById(createLGADto.state).exec();

    if (!state) {
      throw new NotFoundException(
        `State with id ${createLGADto.state} not found`,
      );
    }

    const createLGA = { ...createLGADto, state };
    const createdLGA = new this.lgaModel(createLGA);

    return createdLGA.save();
  }

  @CacheTTL(60 * 60)
  async findAll(): Promise<LGA[]> {
    return this.lgaModel.find().populate('state').exec();
  }

  @CacheKey('lga-state')
  @CacheTTL(60 * 60)
  async findByState(stateName: string): Promise<LGA[]> {
    return this.lgaModel
      .find({ 'state.name': stateName })
      .populate('state')
      .exec();
  }

  @CacheKey('lga-search')
  @CacheTTL(60 * 60)
  async search(query: string): Promise<LGA[]> {
    return this.lgaModel
      .find({ name: new RegExp(query, 'i') })
      .populate('state')
      .exec();
  }
}
