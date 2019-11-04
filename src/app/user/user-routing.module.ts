import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Shell} from '@app/shell/shell.service';
import {extract} from '@app/core';
import {UserComponent} from '@app/user/user.component';
import {RegisterComponent} from '@app/user/register/register.component';


const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  Shell.unAuthenticatedChildRoutes([
    {
      path: 'user/:username',
      component: UserComponent,
      data: { title: extract('User') },
      runGuardsAndResolvers: 'always'
    }
  ])
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class UserRoutingModule { }
