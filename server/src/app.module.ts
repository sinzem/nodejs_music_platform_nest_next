import 'dotenv/config'
import * as path from 'path';
import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { ServeStaticModule } from '@nestjs/serve-static';

const PASSWORD = process.env.MONGO_ACCESS;
@Module({
    imports: [
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),  /* (модуль для обработки статики, передаем путь к папке со статичными файлами) */
        MongooseModule.forRoot(`mongodb+srv://sinzem:${PASSWORD}@cluster0.si7gwif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`),
        TrackModule,
        FileModule
    ]
})

export class AppModule {}