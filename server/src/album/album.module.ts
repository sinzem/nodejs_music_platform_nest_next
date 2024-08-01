import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Album, AlbumSchema } from "src/album/schemas/album.schema";
import { AlbumController } from "./album.controller";
import { AlbumService } from "./album.service";

/* (cоздаем изолированный модуль для работы с альбомами, подключаем в главный app.module) */
@Module({  /* (в декоратор модуля передаем массивы с контроллерами и сервисами) */
    imports: [ /* (подключаем схемы таблиц mongoose) */
        MongooseModule.forFeature([{name: Album.name, schema: AlbumSchema}]),
    ],
    controllers: [AlbumController],
    providers: [AlbumService]
})
export class AlbumModule {

} 