import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { environment } from '@env/environment';
import { PostService } from '@app/core/service/post.service';
import { FacebookService } from 'ngx-facebook';
import { PostResponse } from '@app/core/models/PostResponse';
import { SuggestionsService } from '@app/core/service/suggestions.service';
// @ts-ignore
import { SuggestionsDTO } from '@app/core/models/SuggestionsDTO';
import { UserService } from '@app/core/service/user.service';
import { SubscribeRes } from '@app/core/models/SubscribeRes';
import {CredentialsService} from '@app/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit, OnDestroy {
  version: string | null = environment.version;
  player: YT.Player;
  slug: string;
  checkLoading: false;
  postMapping = new PostResponse();
  listPostCat: PostResponse[];
  showAll = 'SHOW_ALL';
  // Param routing
  navigationSubscription: any;
  suggestions = SuggestionsDTO;
  subscribeRes: SubscribeRes;
  isLoadingSubscribe: boolean;
  error: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private userService: UserService,
    private fb: FacebookService,
    private router: Router,
    private credentialsService: CredentialsService,
    private suggestionsService: SuggestionsService
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.suggestions = null;
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.route.queryParamMap.subscribe(params => {
      if (params.get('list') !== null) {
        console.log(params.get('list'));
        return this.suggestionsService.getSuggestionBySlugUsingByGet(params.get('list')).subscribe(suggestions => {
          this.suggestions = suggestions;
        });
      }
    });
  }
  ngOnInit() {
    this.checkLoading = false;
    this.route.params.subscribe(routeParams => {
      this.getVideoUsingByGet();
      this.onStateChange(3);
    });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }
  getSubscribeUserPost(subscribeId: number) {
    if(this.credentialsService.isAuthenticated()) {
      this.userService.getSubscribeUserPost(subscribeId).subscribe(
        datas => {
          if (datas.code === 2001) {
            this.subscribeRes = datas;
            console.log(this.subscribeRes);
          }
          // TODO Excerption else
        },
        error1 => {
          this.error = error1.error.errorKey;
        }
      );
    }
  }
  subscribeUser() {
    this.isLoadingSubscribe = true;
    this.userService
      .subscribe(this.postMapping.user.id)
      .pipe()
      .subscribe(
        datas => {
          this.isLoadingSubscribe = false;
          if (datas.code === 2001) {
            this.subscribeRes = datas;
          }
          // TODO Excerption else
        },
        error1 => {
          this.isLoadingSubscribe = false;
          this.error = error1.error.errorKey;
        }
      );
  }
  getVideoUsingByGet() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    return this.postService.getVideoBySlugUsingByGet(this.slug).subscribe(posts => {
      this.postMapping = posts;
      this.getPostByIdCat(this.postMapping);
      if (this.postMapping && this.postMapping.user) {
        this.getSubscribeUserPost(this.postMapping.user.id);
      }
      if (this.player) {
        this.player.loadVideoById(this.postMapping.idVideo);
      }
      this.updateViewed(this.postMapping.id);
    });
  }

  updateViewed(id: number) {
    const viewed = localStorage.getItem('viewed');
    if (viewed) {
      const viewedParse = JSON.parse(viewed);
      const viewedParseNew = viewedParse.filter((view: any) => view !== id);
      viewedParseNew.unshift(id);
      localStorage.setItem('viewed', JSON.stringify(viewedParseNew));

      const index = viewedParse.indexOf(id);
      if (index === -1) {
        this.postService
          .updateViewPost(id)
          .pipe()
          .subscribe();
      }
    } else {
      localStorage.setItem('viewed', '[' + id + ']');
      this.postService
        .updateViewPost(id)
        .pipe()
        .subscribe();
    }
  }

  getPostByIdCat(postVd: PostResponse) {
    return this.postService.getPostByIdCat(postVd.categories.id, 0, 20).subscribe(postsCat => {
      this.listPostCat = postsCat;
      console.log(postsCat);
    });
  }
  savePlayer(player: any) {
    this.player = player;
    console.log('player instance', player);
  }
  viewAll() {
    this.showAll = this.showAll === 'NO_SHOW_ALL' ? 'SHOW_ALL' : 'NO_SHOW_ALL';
  }
  onStateChange(event: any) {
    console.log('player state', event.data);
  }
  redirectPage(slug: string, params?: string) {
    return this.postService.getVideoBySlugUsingByGet(slug).subscribe(posts => {
      this.postMapping = posts;
      this.player.loadVideoById(this.postMapping.idVideo);
      this.router.navigateByUrl('/video/' + slug);
      if (params) {
        this.router.navigate(['/video/' + slug], { queryParams: { list: params } });
      }
    });
  }
}
