import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { State } from './state.schema';

@Schema()
export class LGA extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: State, required: true })
  state: State;

  @Prop({ type: Number })
  population: number;

  @Prop({ type: Number })
  landmass: number;

  @Prop({ type: String })
  latitude: string;

  @Prop({ type: String })
  longitude: string;

  @Prop({ type: String })
  website: string;
}
export const LGASchema = SchemaFactory.createForClass(LGA);
