import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from '../dialog/dialog.service';
import { Post } from '../interface/post';
import { PostdetailComponent } from '../postdetail/postdetail.component';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {
  postList: Post[] = [];
  constructor(private router : Router, private postService: PostServiceService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => {
      this.postList = posts;
    })
  }

  showDetail(post: Post){
    this.router.navigateByUrl('/post-detail', { state: post });
  }

  showDialog(post){
    this.dialogService.open(PostdetailComponent, {data: post});
  }
}
