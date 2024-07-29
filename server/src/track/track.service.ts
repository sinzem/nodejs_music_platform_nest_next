import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Track, TrackDocument } from "./schemas/track.schema";
import { Model } from "mongoose";
import { Comment, CommentDocument } from "./schemas/comment.schema";
import { Album, AlbumDocument } from "src/album/album.schema";
import { CreateTrackDto } from "./dto/create-track.dto";


@Injectable()
export class TrackService {

    constructor(
        @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
        @InjectModel(Album.name) private albumModel: Model<AlbumDocument>
    ) {} /* (подключаем схемы таблиц с помощью декоратора InjectModel(позволит обращаться к ним через this), типизируем) */

    /* (при создании входящие данные должны соответствовать классу dto, также типизируем, что на выходе ожидеется тип Track(так как функция асинхронная, он будет промисом)) */
    async create(dto: CreateTrackDto): Promise<Track> {
        const track = await this.trackModel.create({...dto, listens: 0}); /* (передаем входящий обьект dto(название, имя, описание), и добавляем поле прослушиваний) */
        return track;
    }
    
    async getAll(): Promise<Track[]> {
        const tracks = await this.trackModel.find();
        return tracks;
    }

    async getOne() {
        
    }
    
    async delete() {
        
    }
}