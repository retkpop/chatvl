import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { VideosModule } from './single/videos/videos.module';
import { ShellModule } from './shell/shell.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddModule } from '@app/add/add.module';
import { BasicAuthInterceptor } from '@app/core/_helpers';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { PopularModule } from '@app/popular/popular.module';
import { SubscribesModule } from '@app/subscribes/subscribes.module';
import {MaterialModule} from '@app/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    VideosModule,
    PopularModule,
    SubscribesModule,
    AddModule,
    LoginModule,
    ModalModule.forRoot(),
    NgxYoutubePlayerModule.forRoot(),
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
