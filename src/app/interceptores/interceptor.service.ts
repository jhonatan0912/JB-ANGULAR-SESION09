import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  // 
  constructor(private http: HttpClient) { }
  // 
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Paso por el interceptor");
    return next.handle(req);
  }

  // 
  getPosts(): any {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  // 

}