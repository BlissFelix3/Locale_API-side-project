import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Region extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Number })
  population: number;

  @Prop({ type: Number })
  landmass: number;

  @Prop({ type: String })
  latitude: string;

  @Prop({ type: String })
  longitude: string;

  @Prop({ type: String })
  geoPoliticalZone: string;
  
  @Prop({ type: String })
  website: string;
}

export const RegionSchema = SchemaFactory.createForClass(Region);