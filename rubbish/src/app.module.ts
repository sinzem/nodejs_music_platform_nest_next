import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    controllers: [AppController], /* (массив с контроллерами - эндпоинты) */
    providers: [AppService] /* (массив с сервисами - коллбэки для эндпоинтов) */
})

export class AppModule {}