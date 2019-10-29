import {Component, OnInit} from '@angular/core';
import {SuggestionsService} from '@app/core/service/suggestions.service';
import {FormBuilder} from '@angular/forms';
import {VideosComponent} from '@app/single/videos/videos.component';
import {CredentialsService} from '@app/core';
import {MatDialog} from '@angular/material';
import {DialogComponent} from '@app/admin/dialog/dialog.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  active = false;
  constructor(
    private suggestionsService: SuggestionsService,
    private formBuilder: FormBuilder,
    private videosComponent: VideosComponent,
    private credentialsService: CredentialsService,
    public dialog: MatDialog
  ) {
    if (this.credentialsService.authoritiesConstantsAdmin() === true) {
      this.active = true;
    }
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      data: {videoId: this.videosComponent.postMapping.id}
    });
  }

}
