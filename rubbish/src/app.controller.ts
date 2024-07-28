import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

/* (эндпоинты) */
@Controller("/api") /* (помечаем декоратором путь) */
export class AppController {

    constructor(private appService: AppService) {} /* (подключаем сервисы) */

    @Get() /* (помечаем декоратором метод) */
    getUsers() {
        return this.appService.getUsers(); /* (вызываем функции сервиса) */
    }
} 