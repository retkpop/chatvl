import { Component, OnInit } from '@angular/core';
import {SuggestionsService} from '@app/core/service/suggestions.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from 'select2';
import {VideosComponent} from '@app/single/videos/videos.component';
import {CredentialsService} from '@app/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  addSuggestion!: FormGroup;
  options: Options;
  isLoading = false;
  suggestionss: any = Array<SuggestionsDTO>();
  active = false;
  constructor(
    private suggestionsService: SuggestionsService,
    private formBuilder: FormBuilder,
    private videosComponent: VideosComponent,
    private credentialsService: CredentialsService
  ) {
    if(this.credentialsService.authoritiesConstantsAdmin() === true) {
      this.active = true;
    }
    this.createForm();
  }

  ngOnInit() {
    this.getAllSuggestionUsingByGet();
  }
  onClickSubmit() {
    this.isLoading = true;
    this.updateAddSuggestionsUsingByGet();
  }
  getAllSuggestionUsingByGet() {
    return this.suggestionsService
      .getVideoBySlugUsingByGet()
      .subscribe(suggestions => {
        this.suggestionss = suggestions;
        this.options = {
          multiple: true,
          tags: true
        };
      });
  }
  updateAddSuggestionsUsingByGet() {
    this.addSuggestion.patchValue({
      posts_id: this.videosComponent.postMapping.id
    });
    return this.suggestionsService
      .updateAddSuggestionsUsingByGet(this.addSuggestion.value)
      .subscribe(addSuggestion => {
        this.isLoading = false;
      });
  }
  private createForm() {
    this.addSuggestion = this.formBuilder.group({
      posts_id: ['', Validators.compose(null)],
      suggestionss: ['', Validators.required]
    });
  }

}
