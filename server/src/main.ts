import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

/* (основной файл, создаем сервер и запускаем на нем приложение) */
const start = async () => {
    try {
        const PORT = process.env.PORT || 5000;
        const app = await NestFactory.create(AppModule);

        await app.listen(PORT, () => console.log(`Server was started on port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}


start();