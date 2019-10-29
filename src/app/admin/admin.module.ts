import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ModalModule } from 'ngx-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';
import { DialogComponent } from './dialog/dialog.component';
import {MatButtonModule, MatFormFieldModule, MatSelectModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [AdminComponent, ToolbarComponent, DialogComponent],
  exports: [ToolbarComponent, DialogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ModalModule,
    ReactiveFormsModule,
    NgSelect2Module,
    MatFormFieldModule,
    MatSelectModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  entryComponents: [DialogComponent],
})
export class AdminModule {}
