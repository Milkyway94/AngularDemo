import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../interface/post';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  constructor(private http: HttpClient) { }
  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("https://api.github.com/users/Milkyway94/repos");
  }

  public getPostById(repo: number): Observable<Post> {
    return this.http.get<Post>("https://api.github.com/repos/Milkyway94/" + repo);
  }
}
