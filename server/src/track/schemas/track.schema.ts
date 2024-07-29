import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';

export type TrackDocument = Track & Document;

@Schema()
export class Track {
        /* (шв проставляет автоматически) */
    @Prop()
    name: string;

    @Prop()
    artist: string;

    @Prop()
    text: string;

    @Prop()
    listens: number;

    @Prop()
    picture: string;

    @Prop()
    audio: string;

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}]}) /* (в опциях указываем тип связи(по ID) и подвязываем к нужной схеме) */
    comments: Comment[]; /* (комментарии будут храниться в массиве типа Comment) */
}

export const TrackSchema = SchemaFactory.createForClass(Track);
/* (cхема таблицы треков в mongoose, подключаем в track.module) */