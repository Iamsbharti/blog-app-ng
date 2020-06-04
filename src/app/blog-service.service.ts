import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'exjs/add/operator/do';
@Injectable({
  providedIn: 'root',
})
export class BlogServiceService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken =
    'NTRiMzk3MWNmZGIzNDAzOTEyMjMxMmNjMjNhYzgyZDc1OWUwMWYzYjVlOWU3NDM1MGI0ZjVkNzZlNjg5NzhiZjQ0OWE1NWRhYjk5OGI4YmQzOGIzOTkzYjM1ZTZhMGZmYzVhOTFiNzJlYzBlOTRkN2IwOGZkMjc3YzFjZDE0OGUxMA==';

  constructor(public _http: HttpClient) {
    console.log('Blog service init');
  }

  public getAllBlogs(): any {
    this.allBlogs = this._http.get(`${this.baseUrl}/all?${this.authToken}`);
    console.log('blogs', this.allBlogs);
  }

  public getBlogById(blogId): any {
    this.currentBlog = this._http.get(
      `${this.baseUrl}/view${blogId}?${this.authToken}`
    );
  }
}
