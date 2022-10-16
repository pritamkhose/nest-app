import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BirdDocument = Bird & Document;

@Schema()
export class Bird {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  breed: string;
}

export const BirdSchema = SchemaFactory.createForClass(Bird);
