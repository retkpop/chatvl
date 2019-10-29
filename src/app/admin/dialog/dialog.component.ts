import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SuggestionsService} from '@app/core/service/suggestions.service';
import {CredentialsService} from '@app/core';
import {Options} from 'select2';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  addSuggestion!: FormGroup;
  options: Options;
  isLoading = false;
  suggestionss: any = Array<SuggestionsDTO>();
  active = false;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private suggestionsService: SuggestionsService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private credentialsService: CredentialsService,
  ) {
    if (this.credentialsService.authoritiesConstantsAdmin() === true) {
      this.active = true;
    }
    this.createForm();
  }

  ngOnInit() {
    this.getAllSuggestionUsingByGet();
  }
  getAllSuggestionUsingByGet() {
    return this.suggestionsService.getVideoBySlugUsingByGet().subscribe(suggestions => {
      this.suggestionss = suggestions;
      this.options = {
        multiple: true,
        tags: true
      };
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  onClickSubmit() {
    this.isLoading = true;
    this.updateAddSuggestionsUsingByGet();
  }

  updateAddSuggestionsUsingByGet() {
    this.addSuggestion.patchValue({
      posts_id: this.data.videoId
    });
    return this.suggestionsService.updateAddSuggestionsUsingByGet(this.addSuggestion.value).subscribe(addSuggestion => {
      this.isLoading = false;
      this.dialogRef.close();
    });
  }
  private createForm() {
    this.addSuggestion = this.formBuilder.group({
      posts_id: ['', Validators.compose(null)],
      suggestionss: ['', Validators.required]
    });
  }
}
export interface DialogData {
  videoId: number;
}
