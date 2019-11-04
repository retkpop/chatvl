import { Component, OnInit } from '@angular/core';
import {Categories, CategoriesResourceService, User, UserResourceService} from '@app/core/api-client';
import {CredentialsService} from '@app/core';
import {PageSiteService} from '@app/shell/page-site.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categories: Categories[];
  userLogged: boolean;
  userSubscribes: User[];
  currentPage: string;

  constructor(
    private categoriesResourceService: CategoriesResourceService,
    private credentialsService: CredentialsService,
    private userResourceService: UserResourceService,
    private pageSiteService: PageSiteService
  ) {
    this.pageSiteService.getCurrentPage.subscribe(page => {
      this.currentPage = page;
    })
  }

  ngOnInit() {
    this.categoriesResourceService.getAllCategoriesUsingGET().subscribe((categories: Categories[]) => {
      this.categories = categories;
    });
    if(this.credentialsService.isAuthenticated()) {
      this.userResourceService.getAllUserSubscribedUsingGET().subscribe((users: User[]) => {
        this.userSubscribes = users;
      })
    }
    this.userLogged = this.credentialsService.isAuthenticated();
  }
}
