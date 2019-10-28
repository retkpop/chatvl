import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ModalModule } from 'ngx-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';

@NgModule({
  declarations: [AdminComponent, ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [CommonModule, AdminRoutingModule, ModalModule, ReactiveFormsModule, NgSelect2Module]
})
export class AdminModule {}
