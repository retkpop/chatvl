import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-popup-play',
  templateUrl: './popup-play.component.html',
  styleUrls: ['./popup-play.component.scss']
})
export class PopupPlayComponent implements OnInit{
  player: YT.Player;
  urlVideo: string;
  constructor(
    private route: ActivatedRoute,
    public sanitizer: DomSanitizer,
    public dialogRef: MatDialogRef<PopupPlayComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.onStateChange(3);
    });
    this.urlVideo = 'https://www.youtube.com/embed/'+this.data.videoId+'?autoplay=1';
    console.log(this.data.videoId);
  }
  savePlayer(player: any) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event: any) {
    console.log('player state', event.data);
  }
}

export interface DialogData {
  videoId: string;
}
