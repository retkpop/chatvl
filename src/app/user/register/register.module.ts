import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from '@app/user/register/register.component';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatSlideToggleModule
} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '@app/shared';
import {TranslateModule} from '@ngx-translate/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@app/material.module';
import {AccountResourceService} from '@app/core/api-client';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FlexLayoutModule,
    MaterialModule,
    RegisterRoutingModule,
    MatMenuModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    TranslateModule,
    SharedModule
  ],
  providers: [AccountResourceService]
})
export class RegisterModule { }
