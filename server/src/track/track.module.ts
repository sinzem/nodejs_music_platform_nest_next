import { Module } from "@nestjs/common";
import { TrackController } from "./track.controller";
import { TrackService } from "./track.service";
import { MongooseModule } from "@nestjs/mongoose";
import { Track, TrackSchema } from "./schemas/track.schema";
import { Comment, CommentSchema } from "./schemas/comment.schema";
import { Album, AlbumSchema } from "src/album/album.schema";

/* (cоздаем изолированный модуль для работы с треками, подключаем в главный app.module) */
@Module({  /* (в декоратор модуля передаем массивы с контроллерами и сервисами) */
    imports: [ /* (подключаем схемы таблиц mongoose) */
        MongooseModule.forFeature([{name: Track.name, schema: TrackSchema}]),
        MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}]),
        MongooseModule.forFeature([{name: Album.name, schema: AlbumSchema}]),
    ],
    controllers: [TrackController],
    providers: [TrackService]
})
export class TrackModule {

} 