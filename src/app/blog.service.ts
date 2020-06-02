import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
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
  constructor() {
    console.log('blog-service initiliazed');
  }

  public getAllBlogs(): any {
    return this.allBlogs;
  }
  public currentBlog: any;
  public getSingleBlogDetails = (blogId) => {
    this.currentBlog = this.allBlogs.find((blog) => blog.id == blogId);
    return this.currentBlog;
  };
}
