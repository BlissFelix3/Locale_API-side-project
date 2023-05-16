import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Region } from './region.schema';

@Schema()
export class State extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Region, required: true })
  region: Region;

  @Prop({ type: Number })
  population: number;

  @Prop({ type: Number })
  landmass: number;

  @Prop({ type: String })
  latitude: string;

  @Prop({ type: String })
  longitude: string;

  @Prop({ type: String })
  capital: string;

  @Prop({ type: String })
  slogan: string;

  @Prop({ type: [String] })
  senatorialDistricts: string[];

  @Prop({ type: String })
  dialect: string;

  @Prop({ type: String })
  map: string;

  @Prop({ type: String })
  website: string;

  @Prop({ type: Date })
  createdDate: Date;

  @Prop({ type: String })
  createdBy: string;

  @Prop({ type: [String] })
  pastGovernors: string[];

  @Prop({ type: [String] })
  borders: string[];

  @Prop({ type: [String] })
  knownFor: string[];
}

export const StateSchema = SchemaFactory.createForClass(State);
