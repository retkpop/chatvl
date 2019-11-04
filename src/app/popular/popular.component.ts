import { Component, OnInit } from '@angular/core';
import { PostService } from '@app/core/service/post.service';
import { PostResponse } from '@app/core/models/PostResponse';
import {PageSiteService} from '@app/shell/page-site.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.scss']
})
export class PopularComponent implements OnInit {
  postNews: PostResponse[];

  constructor(
    private postService: PostService,
    private pageSiteService: PageSiteService
  ) {
    this.pageSiteService.setCurrentPage('popular');
  }

  ngOnInit() {
    this.getVideoPopular(0, 50);
  }
  getVideoPopular(page: number, size: number) {
    this.postService
      .getVideoPopular(page, size)
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
