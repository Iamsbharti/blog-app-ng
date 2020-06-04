import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlogService } from '../blog.service';
import { BlogServiceService } from '../blog-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private blogService: BlogService,
    private httpBlogService: BlogServiceService
  ) {}
  public allBlogs: any;
  ngOnInit(): any {
    //this.allBlogs = this.blogService.getAllBlogs();
    this.allBlogs = this.httpBlogService.getAllBlogs();
  }
  ngOnDestroy(): any {
    console.log('HomeComponent destroyed');
  }
}
