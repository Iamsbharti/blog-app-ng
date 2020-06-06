import { Component, OnInit } from '@angular/core';
import { BlogHttpService } from '../blog-http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Toaster, ToastConfig } from 'ngx-toast-notifications';
@Component({
  selector: 'app-blog-edit',
  templateUrl: './blog-edit.component.html',
  styleUrls: ['./blog-edit.component.css'],
})
export class BlogEditComponent implements OnInit {
  public currentBlog: any;
  public allowedCategory: string[] = [
    'Drama',
    'Science',
    'philosophy',
    'Health',
    'Space',
  ];
  public blogId: string;
  constructor(
    private blogHttpService: BlogHttpService,
    private _router: Router,
    private _route: ActivatedRoute,
    private toaster: Toaster
  ) {}

  ngOnInit(): void {
    //get blogId from route
    this.blogId = this._route.snapshot.paramMap.get('blogid');
    //console.log('blogid', this.blogId);
    this.currentBlog = this.blogHttpService.getBlogById(this.blogId).subscribe(
      (data) => {
        //console.log('data', data);
        this.currentBlog = data['data'];
        this.toaster.open({ text: data.message, type: 'success' });
      },
      (error) => {
        console.warn(error.message);
        this.toaster.open({ text: error.message, type: 'danger' });
      }
    );
  }

  //edit blog
  public editBlog(): any {
    this.blogHttpService
      .editBlogService(this.blogId, this.currentBlog)
      .subscribe(
        (data) => {
          //console.log(data);
          this.toaster.open({ text: data.message, type: 'dark' });
          this._router.navigate(['/viewblog', this.blogId]);
        },
        (error) => {
          console.warn(error.message);
          this.toaster.open({ text: error.message, type: 'danger' });
        }
      );
  }
}
