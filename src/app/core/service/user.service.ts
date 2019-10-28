import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { SubscribeRes } from '@app/core/models/SubscribeRes';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}
  subscribe(subscribeId: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.post<SubscribeRes>(`${environment.apiUrl}/api/users/subscribe`, subscribeId, {
      withCredentials: true
    });
  }
  getSubscribeUserPost(subscribeId: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<SubscribeRes>(`${environment.apiUrl}/api/users/get-subscribe-user-post/${subscribeId}`);
  }
}
