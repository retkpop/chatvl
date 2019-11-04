import { Component, OnInit } from '@angular/core';
import {Posts, PostsResourceService, SubscribeRes, UserDTO, UserResourceService} from '@app/core/api-client';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {CredentialsService} from '@app/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  navigationSubscription: any;
  username: string;
  user: UserDTO;
  posts: Posts[];
  isLoadingSubscribe = false;
  subscribeRes: SubscribeRes;
  numberSubscribe: number;
  itMe: boolean;
  constructor(
    private userResourceService: UserResourceService,
    private postsResourceService: PostsResourceService,
    private route: ActivatedRoute,
    private router: Router,
    private credentialsService: CredentialsService,
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }
  getSubscribeUserPost(subscribeId: number) {
    if(this.credentialsService.isAuthenticated()) {
      this.userResourceService.getSubscribeUserPostUsingGET(subscribeId).subscribe(
        datas => {
          if (datas.code === 2001) {
            this.subscribeRes = datas;
          }
          // TODO Excerption else
        }
      );
    }
  }
  countNumberSubscribeUser(userId: number) {
    this.userResourceService.countNumberSubscribeUserUsingGET(userId).subscribe(number => {
      this.numberSubscribe = number;
    });
  }
  subscribeUser() {
    this.isLoadingSubscribe = true;
    this.userResourceService.subscribeUserUsingPOST(this.user.id)
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
        }
      );
  }
  initialiseInvites() {
    this.route.queryParamMap.subscribe(params => {
      if (params.get('edit') !== null) {
        console.log(params.get('edit'));

      }
    });
  }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username');
    this.route.params.subscribe(routeParams => {
      this.getUserUsingByGet(this.username);
      this.getListPostByUser(0, 30, this.username);
      if (this.credentialsService.getNameLogged() === this.username) {
        this.itMe = true;
      }
    });
  }
  getListPostByUser(page: number, size: number, user: string) {
    this.postsResourceService.getVideoByUserNameUsingGET(page, size, user).subscribe((posts: Posts[]) => {
      this.posts = posts;
    });
  }
  getUserUsingByGet(username: string) {
    this.userResourceService.getUserUsingGET(username).subscribe((user: UserDTO) => {
      this.user = user;
      this.getSubscribeUserPost(user.id);
      this.countNumberSubscribeUser(user.id);
    })
  }
}
