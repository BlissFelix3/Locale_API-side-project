import { Injectable } from '@nestjs/common';
import { CacheTTL, CacheKey } from '@nestjs/cache-manager';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Region } from '../models/region.schema';
import { CreateRegionDto } from '../dtos/region.dto';

@Injectable()
export class RegionService {
  constructor(@InjectModel(Region.name) private regionModel: Model<Region>) {}

  async create(createRegionDto: CreateRegionDto): Promise<Region> {
    const createdRegion = new this.regionModel(createRegionDto);
    return createdRegion.save();
  }

  @CacheTTL(60 * 60)
  async findAll(): Promise<Region[]> {
    return this.regionModel.find().exec();
  }

  @CacheKey('region-search')
  @CacheTTL(60 * 60)
  async search(query: string): Promise<Region[]> {
    return this.regionModel.find({ name: new RegExp(query, 'i') }).exec();
  }
}
