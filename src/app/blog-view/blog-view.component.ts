import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
})
export class BlogViewComponent implements OnInit {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private blogService: BlogService
  ) {
    console.log(`${this._route}-${this._router}`);
  }
  public currentBlog: any;

  ngOnInit(): any {
    const blogId = this._route.snapshot.paramMap.get('blogid');
    this.currentBlog = this.blogService.getSingleBlogDetails(blogId);
    console.log('current blog', this.currentBlog);
  }
}
