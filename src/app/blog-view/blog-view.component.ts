import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogHttpService } from '../blog-http.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
})
export class BlogViewComponent implements OnInit, OnDestroy {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private blogService: BlogService,
    private httpBlogService: BlogHttpService
  ) {}
  public currentBlog: any;
  public _blogId: any;
  ngOnInit(): any {
    this._blogId = this._route.snapshot.paramMap.get('blogid');
    console.log('blogid from navigation', this._blogId);
    //this.currentBlog = this.blogService.getSingleBlogDetails(blogId);
    this.currentBlog = this.httpBlogService.getBlogById(this._blogId).subscribe(
      (data) => {
        console.log(data);
        this.currentBlog = data['data'];
      },
      (error) => {
        console.log('error', error.message);
      }
    );
  }
  public deleteBlog(): any {
    console.log('deleting ', this._blogId);
    this.httpBlogService.deleteBlogService(this._blogId).subscribe(
      (data) => {
        console.log(data);
        console.log(data['message']);
      },
      (error) => {
        console.warn(error.message);
      }
    );
  }
  ngOnDestroy(): any {
    console.log('BlogView Component destroyed');
  }
}
