import { ObjectId } from "mongoose";

/* (обьект для проверки данных на входе(при создании комментария)) */
export class CreateCommentDto {
    readonly username: string;
    readonly text: string;
    readonly trackId: ObjectId;
}