import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {extract} from '@app/core';
import {RegisterComponent} from '@app/user/register/register.component';


const routes: Routes = [{ path: 'register', component: RegisterComponent, data: { title: extract('Register') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
