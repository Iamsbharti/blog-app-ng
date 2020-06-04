import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class BlogHttpService {
  public allBlogs;
  public currentBlog;
  public baseUrl = 'https://blogapp.edwisor.com/api/v1/blogs';
  public authToken =
    'NTRiMzk3MWNmZGIzNDAzOTEyMjMxMmNjMjNhYzgyZDc1OWUwMWYzYjVlOWU3NDM1MGI0ZjVkNzZlNjg5NzhiZjQ0OWE1NWRhYjk5OGI4YmQzOGIzOTkzYjM1ZTZhMGZmYzVhOTFiNzJlYzBlOTRkN2IwOGZkMjc3YzFjZDE0OGUxMA==';

  constructor(private _http: HttpClient) {
    console.log('Blog Http Servcie Init');
    console.log(`${this.baseUrl}/all?${this.authToken}`);
  }
  public getAllBlogs(): any {
    let allBlogsResponse = this._http.get(
      `${this.baseUrl}/all?${this.authToken}`
    );
    return allBlogsResponse;
  }

  public getBlogById(blogId): any {
    let singleBlogResponse = this._http.get(
      `${this.baseUrl}/view?${this.authToken}`
    );
    return singleBlogResponse;
  }
}
