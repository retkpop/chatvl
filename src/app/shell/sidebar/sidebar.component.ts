import { Component, OnInit } from '@angular/core';
import {Categories, CategoriesResourceService, User, UserResourceService} from '@app/core/api-client';
import {CredentialsService} from '@app/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categories: Categories[];
  userLogged: boolean;
  userSubscribes: User[];

  constructor(
    private categoriesResourceService: CategoriesResourceService,
    private credentialsService: CredentialsService,
    private userResourceService: UserResourceService
  ) {}

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
