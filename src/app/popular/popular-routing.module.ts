import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Shell} from '@app/shell/shell.service';
import {extract} from '@app/core';
import {PopularComponent} from '@app/popular/popular.component';


const routes: Routes = [
  // tslint:disable-next-line:max-line-length
  Shell.unAuthenticatedChildRoutes([
    { path: 'popular', component: PopularComponent, data: { title: extract('Popular') }, runGuardsAndResolvers: 'always' }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopularRoutingModule { }
