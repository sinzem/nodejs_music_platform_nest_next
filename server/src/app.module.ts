import 'dotenv/config'
import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

const PASSWORD = process.env.MONGO_ACCESS;
;@Module({
    imports: [
        MongooseModule.forRoot(`mongodb+srv://sinzem:${PASSWORD}@cluster0.si7gwif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`),
        TrackModule
    ]
})

export class AppModule {}