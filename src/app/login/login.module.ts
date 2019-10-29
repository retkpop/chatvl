import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {FacebookModule} from 'ngx-facebook';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatSlideToggleModule
} from '@angular/material';
import {SharedModule} from '@app/shared';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MaterialModule} from '@app/material.module';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslateModule,
    FlexLayoutModule,
    MaterialModule,
    LoginRoutingModule,
    FacebookModule.forRoot(),
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    SharedModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule {}
