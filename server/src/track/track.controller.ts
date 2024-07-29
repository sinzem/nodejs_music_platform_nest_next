import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { TrackService } from "./track.service";
import { CreateTrackDto } from "./dto/create-track.dto";
import { ObjectId } from "mongoose";
import { CreateCommentDto } from "./dto/create-comment.dto";


@Controller("/tracks") 
export class TrackController {

    /* (подключаем сервисы) */
    constructor(private trackService: TrackService) {}

    @Post()
    create(@Body() dto: CreateTrackDto) { /* (при создании трека входящий обьект(будет приходить с клиента через класс dto(для проверки на соответствие данных), обозначаем его декоратором Body)) */
        return this.trackService.create(dto); /* (запускаем функцию серыиса, передаем в нее пришедший обьект) */
    }
    
    @Get()
    getAll() {
        return this.trackService.getAll();
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
}