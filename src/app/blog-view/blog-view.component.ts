import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
})
export class BlogViewComponent implements OnInit {
  constructor(private _route: ActivatedRoute, private _router: Router) {
    console.log(`${this._route}-${this._router}`);
  }
  public currentBlog: any;
  public allBlogs: any = [
    {
      id: 1,
      name: 'blog1',
      title: 'Focus',
      sampleTest:
        'The art of focus is simple, one with closed eye can see diffrent',
      body:
        'The art of focus is simple, one with closed eye can see diffrent perspective of oneself.It shows',
      created: '30th May 2020',
      author: 'saurabh',
      bg: 'assets/brick-blue.jpg',
    },
    {
      id: 2,
      name: 'blog2',
      title: 'Not there?',
      sampleTest:
        'The art of focus is simple, one with closed eye can see diffrent',
      body:
        'The art of focus is simple, one with closed eye can see diffrent perspective of oneself.It shows',
      created: '29th May 2020',
      author: 'John',
      bg: 'assets/bg.jpg',
    },
    {
      id: 3,
      name: 'blog3',
      title: 'Way to galaxy',
      sampleTest:
        'The art of focus is simple, one with closed eye can see diffrent',
      body:
        'The art of focus is simple, one with closed eye can see diffrent perspective of oneself.It shows',
      created: '12th May 2020',
      author: 'Jack',
      bg: 'assets/woods.jpg',
    },
  ];
  ngOnInit(): any {
    const blogId = this._route.snapshot.paramMap.get('blogid');
    console.log(blogId);
    this.getSingleBlogDetails(blogId);
  }
  getSingleBlogDetails = (blogId) => {
    this.currentBlog = this.allBlogs[blogId];
    console.log(this.currentBlog);
  };
}
