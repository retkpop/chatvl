import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { VideosComponent } from './videos.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { TooltipModule } from 'ngx-bootstrap';
import {NgbModalModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import { FacebookModule } from 'ngx-facebook';
import { AdminModule } from '@app/admin/admin.module';
import { ActionsComponent } from './actions/actions.component';

@NgModule({
  declarations: [VideosComponent, ActionsComponent],
  imports: [
    CommonModule,
    TranslateModule,
    VideosRoutingModule,
    NgxYoutubePlayerModule,
    TooltipModule,
    NgbTooltipModule,
    FacebookModule,
    NgbModalModule,
    AdminModule
  ]
})
export class VideosModule {}
