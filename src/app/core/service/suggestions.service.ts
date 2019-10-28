import {Injectable} from '@angular/core';
import {environment} from '@env/environment';
import {HttpClient} from '@angular/common/http';
import {PostResponse} from '@app/core/models/PostResponse';

export interface DataContext {
  posts_id: number;
  suggestions: [];
}
@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {

  constructor(private http: HttpClient) { }

  getVideoBySlugUsingByGet() {
    // tslint:disable-next-line:max-line-length
    return this.http.get<SuggestionsDTO>(`${environment.apiUrl}/api/suggestions-custom`, { withCredentials: true });
  }
  updateAddSuggestionsUsingByGet(dataContext: DataContext) {
    console.log(dataContext);
    // tslint:disable-next-line:max-line-length
    return this.http.post<SuggestionsDTO>(`${environment.apiUrl}/api/suggestions/new`, dataContext, { withCredentials: true });
  }
  getSuggestions(page: number, limit: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<SuggestionsDTO>(`${environment.apiUrl}/api/suggestions/get-suggestions-custom/${page}/${limit}`, {
      withCredentials: true
    });
  }
  getSuggestionBySlugUsingByGet(slug:string) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<SuggestionsDTO>(`${environment.apiUrl}/api/suggestions/get-suggestion-by-slug/${slug}`, { withCredentials: true });
  }
}
