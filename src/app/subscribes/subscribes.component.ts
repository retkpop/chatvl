import { Component, OnInit } from '@angular/core';
import {PostService} from '@app/core/service/post.service';
import {PostResponse} from '@app/core/models/PostResponse';
import {PageSiteService} from '@app/shell/page-site.service';

@Component({
  selector: 'app-subscribes',
  templateUrl: './subscribes.component.html',
  styleUrls: ['./subscribes.component.scss']
})
export class SubscribesComponent implements OnInit {
  postNews: PostResponse[];

  constructor(
    private postService: PostService,
    private pageSiteService: PageSiteService
  ) {
    this.pageSiteService.setCurrentPage('subscribe');
  }

  ngOnInit() {
    this.getVideoSubscribes(0,50)
  }

  getVideoSubscribes(page: number, size: number) {
    this.postService
      .getVideoSubscribes(page, size)
      .pipe()
      .subscribe(
        datas => {
          this.postNews = datas;
        },
        error1 => {
          console.log(error1.error.errorKey);
        }
      );
  }
}
