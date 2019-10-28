import { Component, OnInit } from '@angular/core';
import { SuggestionsService } from '@app/core/service/suggestions.service';
// @ts-ignore
import { SuggestionsDTO } from '@app/core/models/SuggestionsDTO';

@Component({
  selector: 'app-suggestion',
  templateUrl: './suggestion.component.html',
  styleUrls: ['./suggestion.component.scss', '../home.component.scss']
})
export class SuggestionComponent implements OnInit {
  suggestions = SuggestionsDTO;

  constructor(private suggestionsService: SuggestionsService) {}

  ngOnInit() {
    this.getSuggestions(0, 6);
  }
  getSuggestions(page: number, limit: number) {
    this.suggestionsService
      .getSuggestions(page, limit)
      .pipe()
      .subscribe(
        datas => {
          // @ts-ignore
          this.suggestions = datas;
          console.log(this.suggestions);
        },
        error1 => {
          console.log(error1.error.errorKey);
        }
      );
  }
}
