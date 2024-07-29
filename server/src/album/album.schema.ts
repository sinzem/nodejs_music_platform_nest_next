import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Track } from 'src/track/schemas/track.schema';

export type AlbumDocument = Album & Document;

@Schema()
export class Album {
  @Prop()
  name: string;

  @Prop()
  author: string;

  @Prop()
  picture: string;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Track"}]}) /* (в опциях указываем тип связи(по ID) и подвязываем к нужной схеме) */
  comments: Track[]; /* (комментарии будут храниться в массиве типа Comment) */
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
/* (cхема таблицы альбомов в mongoose, подключаем в track.module) */