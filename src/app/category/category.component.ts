import { Component, OnInit } from '@angular/core';
import {Categories, CategoriesResourceService, Posts} from '@app/core/api-client';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {PageSiteService} from '@app/shell/page-site.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  slug: string;
  category : Categories;
  postNews: Posts[];
  navigationSubscription: any;

  constructor(
    private categoriesResourceService: CategoriesResourceService,
    private route: ActivatedRoute,
    private router: Router,
    private pageSiteService: PageSiteService
  ) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  initialiseInvites() {
    this.route.queryParamMap.subscribe(params => {
      this.getCatSlugUsingByGet();
    });
  }

  ngOnInit() {

    // this.getCatSlugUsingByGet();
  }
  getCatSlugUsingByGet() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    return this.categoriesResourceService.getCatBySlugUsingGET(this.slug).subscribe((category : Categories) => {
      if(category) {
        this.category = category;
        this.getPostByIdCatUsingGET(this.category.id, 0, 40);
        this.pageSiteService.setCurrentPage(this.category.slug);
      }
    });
  }
  getPostByIdCatUsingGET(id:number, page:number, size:number) {
    this.categoriesResourceService.getPostByIdCatUsingGET(id, size, page).subscribe((post: Posts[]) => {
      console.log(post);
      if(post) {
        this.postNews = post;
      }
    })
  }

}
