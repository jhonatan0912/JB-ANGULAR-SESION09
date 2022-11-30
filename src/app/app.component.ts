import { Component } from '@angular/core';
import { InterceptorService } from './interceptores/interceptor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // 
  postsList: any = [];

  constructor(private interceptor: InterceptorService) { }

  ngOnInit(): void {
    this.interceptor.getPosts()
      .subscribe((response: any) => this.postsList = response)
  }
  // 
}
