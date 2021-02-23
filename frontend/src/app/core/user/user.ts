import { BaseModel } from '../base/baseModel';

export class User implements BaseModel {
    id: number;
    getRoute(): string {
        return '/user'
    }

}