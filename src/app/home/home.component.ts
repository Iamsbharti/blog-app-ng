import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private blogService: BlogService) {}
  public allBlogs: any;
  ngOnInit(): any {
    this.allBlogs = this.blogService.getAllBlogs();
    console.log(this.allBlogs);
  }
}
