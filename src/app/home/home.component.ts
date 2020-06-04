import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';
import { error } from '@angular/compiler/src/util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private blogService: BlogService,
    private httpBlogService: BlogHttpService
  ) {}
  public allBlogs: any;
  ngOnInit(): any {
    //this.allBlogs = this.blogService.getAllBlogs();
    this.allBlogs = this.httpBlogService.getAllBlogs().subscribe(
      (data) => {
        console.log(data);
        this.allBlogs = data['data'];
      },
      (error) => {
        console.log('error fetching blogs', error.message);
      }
    );
  }
  ngOnDestroy(): any {
    console.log('HomeComponent destroyed');
  }
}
