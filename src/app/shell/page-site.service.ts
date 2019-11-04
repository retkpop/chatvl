import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageSiteService {

  currentPage = new BehaviorSubject<string>('');
  getCurrentPage = this.currentPage.asObservable();
  setCurrentPage(page:string) {
    this.currentPage.next(page);
  }

}
