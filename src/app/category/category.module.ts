import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import {CategoriesResourceService} from '@app/core/api-client';


@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  providers: [CategoriesResourceService]
})
export class CategoryModule { }
