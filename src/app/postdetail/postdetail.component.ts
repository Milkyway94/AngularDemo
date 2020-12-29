import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogConfig } from '../dialog/dialog-config';
import { DialogRef } from '../dialog/dialog-ref';
import { DialogService } from '../dialog/dialog.service';
import { Post } from '../interface/post';
import { PostServiceService } from '../services/post-service.service';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostdetailComponent implements OnInit {
  post: Post;
  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private location: Location,
    public dialog: DialogRef,
    public config: DialogConfig,
    private postService: PostServiceService) {
    console.log(this.activeRouter.snapshot.data);
  }



  ngOnInit(): void {
    console.log(this.config);
    //By popup
    if (this.config.data) {
      this.post = this.config.data;
    }
    else {
      // By Id
      let id = this.activeRouter.snapshot.params['id'];
      if (id) {
        this.postService.getPostById(id).subscribe(post => {
          this.post = post
        });
      }
      else {
        //By state
        let post: any = this.location.getState();
        this.post = {
          id: post.id,
          name: post.name,
          description: post.description
        };
      }
    }
  }

  onClose() {
    this.dialog.close('some value');
  }
}
