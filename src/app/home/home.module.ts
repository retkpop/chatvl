import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { ShellModule } from '@app/shell/shell.module';
import { OwlModule } from 'ngx-owl-carousel';

@NgModule({
  imports: [CommonModule, TranslateModule, CoreModule, SharedModule, HomeRoutingModule, ShellModule, OwlModule],
  declarations: [HomeComponent, SuggestionComponent]
})
export class HomeModule {}
