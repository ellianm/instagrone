import { Observable } from 'rxjs';

export interface BaseService<T> {
    findAll() : Observable<T[]>
    findById(id: number) : Observable<T>
    save(entity : T) : Observable<T>;
    delete(id: number): Observable<Object>;
}