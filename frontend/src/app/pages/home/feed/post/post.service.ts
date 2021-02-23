import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/base/base.service';
import { Post } from './post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({providedIn:'root'})
export class PostService implements BaseService<Post> {
    
    constructor(private httpClient : HttpClient) {}

    findAll(): Observable<Post[]> {
        return this.httpClient.get<Post[]>(environment.API_URL + Post.getRoute())
    }
    
    findById(id: number): Observable<Post> {
        return this.httpClient.get<Post>(environment.API_URL + Post.getRoute() + id)
    }
    
    save(entity: Post): Observable<Post> {
        if (entity.id) {
            return this.httpClient.put<Post>(environment.API_URL+Post.getRoute() + '/' + entity.id, entity)
        }
        return this.httpClient.post<Post>(environment.API_URL+Post.getRoute(), entity)
    }

    delete(id: number): Observable<Post> {
        return this.httpClient.delete<Post>(environment.API_URL+ Post.getRoute()+ id)
    }
    
}