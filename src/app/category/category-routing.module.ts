import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Shell} from '@app/shell/shell.service';
import {extract} from '@app/core';
import {CategoryComponent} from '@app/category/category.component';


const routes: Routes = [
  // tslint:disable-next-line:max-line-length
  Shell.unAuthenticatedChildRoutes([
    {
      path: 'cat/:slug',
      component: CategoryComponent,
      data: { title: extract('Category') },
      runGuardsAndResolvers: 'always'
    }
  ])
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
