import { Body, Controller, Delete, Get, Param, Post, Query, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { TrackService } from "./track.service";
import { CreateTrackDto } from "./dto/create-track.dto";
import { ObjectId } from "mongoose";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { FileFieldsInterceptor } from "@nestjs/platform-express";


@Controller("/tracks") 
export class TrackController {

    /* (подключаем сервисы) */
    constructor(private trackService: TrackService) {}

    @Post()
    @UseInterceptors(FileFieldsInterceptor([
        {name: 'picture', maxCount: 1},
        {name: 'audio', maxCount: 1}
    ])) /* (декоратор для загрузки файлов - прописываем названия и количество) */
    create(@UploadedFiles() files, @Body() dto: CreateTrackDto) { /* (при создании трека входящий обьект(будет приходить с клиента через класс dto(для проверки на соответствие данных), обозначаем его декоратором Body), для загружаемых файлов используем декоратор UploadedFiles) */
        const {picture, audio} = files; /* (получаем загрузаемые файлы) */
        return this.trackService.create(dto, picture[0], audio[0]); /* (запускаем функцию серыиса, передаем в нее пришедший обьект dto и загруженные файлы, если есть(в интерцепторе указаны в виде массива с длинной 1, поэтому берем первые элементы)) */
    }
    
    @Get() /* (при запросе на получение всех треков будет приходить количество показуемых за один запрос(всех может быть очень много) и отступ от начала списка) */
    getAll(@Query('count') count: number,
           @Query('offset') offset: number) {
        return this.trackService.getAll(count, offset);
    }

    @Get('/search') /* (эндпоинт для поиска) */
    search(@Query('query') query: string) {
        return this.trackService.search(query);
    }

    @Get(':id') /* (в адресной строке из запроса будет приходить id) */
    getOne(@Param('id') id: ObjectId) { /* (указываем в декораторе Param, что должен прийти id и типизируем его) */
        return this.trackService.getOne(id);
    }
    
    @Delete(':id')
    delete(@Param('id') id: ObjectId) {
        return this.trackService.delete(id);
    }

    @Post('/comment')  /* (эндпоинт по созданию комментария) */
    addComment(@Body() dto: CreateCommentDto) {
        return this.trackService.addComment(dto);
    }

    @Post('/listen/:id')
    listen(@Param('id') id: ObjectId) { /* (для накручивания счетчика прослушиваний трека) */
        return this.trackService.listen(id); 
    } 
}