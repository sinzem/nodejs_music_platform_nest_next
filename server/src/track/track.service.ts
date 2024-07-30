import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Track, TrackDocument } from "./schemas/track.schema";
import { Model, ObjectId } from "mongoose";
import { Comment, CommentDocument } from "./schemas/comment.schema";
import { Album, AlbumDocument } from "src/album/album.schema";
import { CreateTrackDto } from "./dto/create-track.dto";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { FileService, FileType } from "src/file/file.service";


@Injectable()
export class TrackService {

    constructor(
        @InjectModel(Track.name) private trackModel: Model<TrackDocument>,
        @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
        @InjectModel(Album.name) private albumModel: Model<AlbumDocument>,
        private fileService: FileService
    ) {} /* (подключаем схемы таблиц с помощью декоратора InjectModel(позволит обращаться к ним через this), типизируем, также подключаем сторонний сервис для работы с файлами) */

    /* (при создании входящие данные должны соответствовать классу dto, также типизируем, что на выходе ожидеется тип Track(так как функция асинхронная, он будет промисом)) */
    async create(dto: CreateTrackDto, picture, audio): Promise<Track> {
        const audioPath = this.fileService.createFile(FileType.AUDIO, audio); /* (вызываем функцию сервиса по записи файлов в хранилище, передаем тип и сам файл - вернет строку с названием, используем при создании записи в таблице) */
        const picturePath = this.fileService.createFile(FileType.IMAGE, picture);
        const track = await this.trackModel.create({...dto, listens: 0, audio: audioPath, picture: picturePath}); /* (передаем входящий обьект dto(название, имя, описание), и добавляем поле прослушиваний и строки с адресами сохраненных аудио и картинки) */
        return track;
    }
    
    /* (при запросе на получение всех треков передаем количество показуемых за раз и отступ от начала списка(устанавливаем умолчания)) */
    async getAll(count = 10, offset = 0): Promise<Track[]> {
        const tracks = await this.trackModel.find().skip(Number(offset)).limit(Number(count)); /* (отступ и количество реализуются с помощью методо работы с БД skip и limit) */
        return tracks;
    }

    async getOne(id: ObjectId): Promise<Track> {
        const track = (await this.trackModel.findById(id)).populate('comments'); /* (при получении трека по id, вызываем метод populate - подтянет данные из указанных таблиц(в д.с полностью покажет комментари, без метода - только их id)) */
        return track;
    }
    
    async delete(id: ObjectId): Promise<ObjectId> { /* (как тип промиса автор указал ObjectId, но ts выдает ошибку) */
        const track = await this.trackModel.findByIdAndDelete(id);
        return track.id;
        // return track._id;  /* (метод findByIdAndDelete вернет весь удаленный обьект целиком, но на пользователя вернем только id(он создается автоматически и название начинается с подчеркивания)) */
    }

    async addComment(dto: CreateCommentDto): Promise<Comment> { /* (для добавления комментария) */
        const track = await this.trackModel.findById(dto.trackId); /* (находим сам трек по id) */
        const comment = await this.commentModel.create({...dto}); /* (создаем комментарий с пришедшими данными) */
        // track.comments.push(comment._id);  /* (id комментария добавляем в массив comments у трека(в монгоБД id добавляются с нижним подчеркиванием, и автор прописал так же, но ts выдает ошибку, без подчеркивания отрабатывает нормально - ниже)) */
        track.comments.push(comment.id);
        await track.save(); /* (сохраняем изменения у трека) */
        return comment;
    }
    
    async listen(id: ObjectId) { /* (для счетчика прослушиваний) */
        const track = await this.trackModel.findById(id); /* (находим трек по id) */
        track.listens += 1; /* (увеличиваем поле с прослушиванием на 1) */
        track.save(); /* (сохраняем изменения) */
    }

    async search(query: string) : Promise<Track[]> { /* (для поиска) */
        const tracks = await this.trackModel.find({
            name: {$regex: new RegExp(query, 'i')} /* (ищем по названию, в регулярное выражение передаем саму строку из запроса и флажек нечувствительности к регистру) */
        })
        return tracks;
    }
}

