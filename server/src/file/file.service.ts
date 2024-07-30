import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import * as path from 'path';
import * as fs from 'fs';
import * as uuid from 'uuid';

export enum FileType {
    AUDIO = 'audio',
    IMAGE = 'image' 
} /* (типы для добавляемых файлов) */

@Injectable() 
export class FileService{ /* (сервис для работы с загружаемыми файлами, подключаем в file.module) */

    createFile(type: FileType, file): string { /* (на выходе вернет строку с именем файла) */
        try {
            const fileExtension = file.originalname.split('.').pop(); /* (из поля originalname пришедшего файла(содержит начальное название) получаем разрешение) */
            const fileName = uuid.v4() + '.' + fileExtension; /* (генерируем название) */
            const filePath = path.resolve(__dirname, '..', 'static', type); /* (путь к папке для хранения файлов) */
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true}); /* (если по указанному пути папки нет - создаем, разрешаем рекурсивное вложение папок) */
            }
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer); /* (записываем файл(данные из buffer) по указанному пути(отрабатывает в папке dist)) */
            return type + '/' + fileName; /* (возвращаем строку с адресом записанного файла(для записи в БД)) */
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    removeFile(fileName: string) {

    }
}