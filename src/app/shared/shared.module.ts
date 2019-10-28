import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, YoutubePlayerComponent],
  exports: [LoaderComponent]
})
export class SharedModule {}
