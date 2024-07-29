import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Track } from './track.schema';

export type CommentDocument = Comment & Document/*  & {
  _id: mongoose.Types.ObjectId;
} */;

@Schema()
export class Comment {
  @Prop()
  username: string;

  @Prop()
  text: string;

  /* (поле для связи со схемой Track - по id) */
  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Track"}]})
  track: Track;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
/* (cхема таблицы для комментариев в mongoose, подключаем в track.module) */