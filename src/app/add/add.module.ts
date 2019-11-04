import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { AddRoutingModule } from './add-routing.module';
import { AddComponent } from './add.component';

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxInputTagModule } from '@ngx-lite/input-tag';
import { ModalModule } from 'ngx-bootstrap';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { NgSelect2Module } from 'ng-select2';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { PopupPlayComponent } from './popup-play/popup-play.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    AddRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    NgxInputTagModule,
    ModalModule,
    NgxYoutubePlayerModule,
    NgSelect2Module,
    NgxInputTagModule.forRoot(),
    MatFormFieldModule
  ],
  declarations: [AddComponent, PopupPlayComponent],
  entryComponents: [PopupPlayComponent]
})
export class AddModule {}
