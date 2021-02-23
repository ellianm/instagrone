import { BaseModel } from 'src/app/core/base/baseModel';
import { User } from 'src/app/core/user/user';

export class Post extends BaseModel {

    id: number;
    title: string;
    user: User;
    content : string;
    likes: string;
    comments : Comment[];

    static getRoute(): string {
        return '/post'
    }
}