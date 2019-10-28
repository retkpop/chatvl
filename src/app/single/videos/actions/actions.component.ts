import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActionsDTO } from '@app/core/models/ActionsDTO';
import { VideosComponent } from '@app/single/videos/videos.component';
import { PostService } from '@app/core/service/post.service';
import { CountActionsRes } from '@app/core/models/CountActionsRes';
import { CredentialsService } from '@app/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  @Input() parentData: number;
  actionsDTO = new ActionsDTO();
  Action = Action;
  countAllActionsRes: CountActionsRes;
  countUserActionsRes: CountActionsRes;
  constructor(
    private videosComponent: VideosComponent,
    private postService: PostService,
    private credentialsService: CredentialsService
  ) {}

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    this.countAction(changes.parentData.currentValue);
    this.videosComponent.getSubscribeUserPost(this.videosComponent.postMapping.user.id);
  }
  ngOnInit() {
    this.countAction(this.videosComponent.postMapping.id);
  }

  countAction(postId: number) {
    this.countAllActionByPostId(postId);
    if (this.credentialsService.isAuthenticated() === true) {
      this.countActionUserPost(postId);
    }
  }
  actionPost(actionPost: Action) {
    if (this.credentialsService.isAuthenticated() === true) {
      this.actionsDTO.action = actionPost;
      this.actionsDTO.post_id = this.videosComponent.postMapping.id;
      this.postService
        .actionPost(this.actionsDTO)
        .pipe()
        .subscribe(
          datas => {
            this.countUserActionsRes = datas;
            this.countAllActionByPostId(this.actionsDTO.post_id);
          },
          error1 => {
            console.log(error1.error.errorKey);
          }
        );
    }
  }
  countActionUserPost(postId: number) {
    return this.postService.countActionUserByPostIdUsingByGet(postId).subscribe(datas => {
      this.countUserActionsRes = datas;
    });
  }
  countAllActionByPostId(postId: number) {
    return this.postService.countAllActionByPostIdUsingByGet(postId).subscribe(datas => {
      this.countAllActionsRes = datas;
    });
  }
}
export enum Action {
  LIKE,
  DISLIKE,
  SAVE,
  SHARE
}
