import { Component, OnInit } from '@angular/core';
import { PostService } from '@app/core/service/post.service';
// @ts-ignore
import { PostDTO } from '@app/core/models/PostDTO';
// @ts-ignore
import { SuggestionsDTO } from '@app/core/models/SuggestionsDTO';
import { SuggestionsService } from '@app/core/service/suggestions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoading = false;
  postNews = PostDTO;
  postVieweds = PostDTO;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.isLoading = true;
    this.getPostsNew('new', 20);
    this.getVideoViewed();
  }

  getPostsNew(type: string, limit: number) {
    this.postService
      .getPost(type, limit)
      .pipe()
      .subscribe(
        datas => {
          // @ts-ignore
          this.postNews = datas;
        },
        error1 => {
          console.log(error1.error.errorKey);
        }
      );
  }
  getVideoViewed() {
    const viewed = localStorage.getItem('viewed');
    if (viewed) {
      const viewedParse = JSON.parse(viewed);
      this.postService
        .getVideoViewed(viewedParse)
        .pipe()
        .subscribe(datas => {
          this.postVieweds = datas;
        });
    }
  }
}
