import { Body, Controller, Get, Post } from "@nestjs/common";
import { TrackService } from "./track.service";
import { CreateTrackDto } from "./dto/create-track.dto";


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

    getOne() {
        
    }
    
    delete() {
        
    }
}