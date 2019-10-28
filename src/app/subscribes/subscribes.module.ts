import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribesRoutingModule } from './subscribes-routing.module';
import { SubscribesComponent } from './subscribes.component';


@NgModule({
  declarations: [SubscribesComponent],
  imports: [
    CommonModule,
    SubscribesRoutingModule
  ]
})
export class SubscribesModule { }
