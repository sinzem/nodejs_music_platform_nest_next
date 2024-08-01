import { Module } from "@nestjs/common";
import { FileService } from "./file.service";

/* (модуль для работы с загружаемыми файлами - запись на диск или удаление, подключаем в импорты в app.module и используем в track.module и track.service)  */
@Module({
    providers: [FileService]
})
export class FileModule {

}