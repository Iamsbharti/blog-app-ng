import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Toaster, ToastConfig } from 'ngx-toast-notifications';
@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css'],
})
export class BlogCreateComponent implements OnInit {
  public title: string;
  public description: string;
  public blogBody: string;
  public category: string;
  public allowedCategory: string[] = [
    'Drama',
    'Science',
    'philosophy',
    'Health',
    'Space',
  ];
  constructor(
    private bloghttpservice: BlogHttpService,
    private _Route: ActivatedRoute,
    private _Router: Router,
    private toaster: Toaster
  ) {}

  ngOnInit(): void {}

  public createBlog(): any {
    let newBlog = {
      title: this.title,
      description: this.description,
      blogBody: this.blogBody,
      category: this.category,
    };
    this.bloghttpservice.createNewBlog(newBlog).subscribe(
      (data) => {
        //(data);
        //console.log('blog creataion sucessfull');
        let blogId = data['data'].blogId;
        //console.log('navigating to ', blogId);
        this.toaster.open({ text: data['message'], type: 'dark' });
        setTimeout(() => this._Router.navigate(['/viewblog', blogId]), 2000);
      },
      (error) => {
        console.warn(error.message);
      }
    );
  }
}
