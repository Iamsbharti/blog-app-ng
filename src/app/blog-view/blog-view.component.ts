import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
})
export class BlogViewComponent implements OnInit, OnDestroy {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private blogService: BlogService
  ) {}
  public currentBlog: any;

  ngOnInit(): any {
    const blogId = this._route.snapshot.paramMap.get('blogid');
    this.currentBlog = this.blogService.getSingleBlogDetails(blogId);
  }
  ngOnDestroy(): any {
    console.log('BlogView Component destroyed');
  }
}
