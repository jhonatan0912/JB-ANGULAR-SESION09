import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
    console.log('http service');
  }

  getPosts(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
