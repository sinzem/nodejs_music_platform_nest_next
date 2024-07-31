import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Album, AlbumDocument } from "./schemas/album.schema";


@Injectable()
export class AlbumService {

    constructor(@InjectModel(Album.name) private albumModel: Model<AlbumDocument>) {}

    async getAll(): Promise<Album[]> {
        const tracks = await this.albumModel.find(); 
        return tracks;
    }
} 