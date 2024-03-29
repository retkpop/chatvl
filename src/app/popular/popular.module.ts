import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopularRoutingModule } from './popular-routing.module';
import { PopularComponent } from './popular.component';

@NgModule({
  declarations: [PopularComponent],
  imports: [CommonModule, PopularRoutingModule]
})
export class PopularModule {}
