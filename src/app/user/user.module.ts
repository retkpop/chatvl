import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {PostsResourceService, UserResourceService} from '@app/core/api-client';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule
  ],
  providers: [UserResourceService, PostsResourceService]
})
export class UserModule { }
