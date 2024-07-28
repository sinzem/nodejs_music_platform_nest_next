import { Injectable } from "@nestjs/common";

/* (сервисы - коллбэки для эндпоинтов, помечаем декоратором Injectable - они будут вживляться в другие функции(эндпоинты соответственно)) */
@Injectable() 
export class AppService {
    getUsers(): string {
        return "GET ALL USERS"
    }
}