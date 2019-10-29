import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CredentialsService } from '@app/core';
import { Videos } from '@app/core/models/Videos';
import { PostResponse } from '@app/core/models/PostResponse';
import { ActionsDTO } from '@app/core/models/ActionsDTO';
import { CountActionsRes } from '@app/core/models/CountActionsRes';

export interface DataContext {
  urlVideo: string;
  title: string;
  hashtag: [];
  type: number;
}
@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private credentialsService: CredentialsService, private http: HttpClient) {}
  checkVideo(urlVideo: string) {
    // tslint:disable-next-line:max-line-length
    return this.http.post<Videos>(`${environment.apiUrl}/api/posts/check-link/`, urlVideo, { withCredentials: true });
  }
  addVideo(data: DataContext) {
    data.type = 0;
    return this.http.post<Videos>(`${environment.apiUrl}/api/posts/add-video/`, data, { withCredentials: true });
  }
  getVideoViewed(listId: any) {
    return this.http.post<Videos[]>(`${environment.apiUrl}/api/posts/video-viewed/`, listId, { withCredentials: true });
  }
  updateViewPost(id: number) {
    return this.http.post<void>(`${environment.apiUrl}/api/posts/add-view-post/`, id, { withCredentials: true });
  }

  getPost(type: string, limit: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<Videos>(`${environment.apiUrl}/api/posts/get-post-custom/${type}/${limit}`);
  }

  getCategories() {
    return this.http.get<Select2DTO>(`${environment.apiUrl}/api/categories/custom-get-all`);
  }
  getVideoBySlugUsingByGet(slug: string) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<PostResponse>(`${environment.apiUrl}/api/posts/get-video-by-slug/${slug}`);
  }
  getPostByIdCat(id: number, page: number, limit: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<PostResponse[]>(`${environment.apiUrl}/api/categories/cat-id/${id}/${page}/${limit}`);
  }
  getVideoPopular(page: number, size: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<PostResponse[]>(`${environment.apiUrl}/api/posts/get-video-popular/${page}/${size}`);
  }
  getVideoSubscribes(page: number, size: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<PostResponse[]>(`${environment.apiUrl}/api/posts/get-video-subscribes/${page}/${size}`);
  }

  actionPost(action: ActionsDTO) {
    return this.http.post<CountActionsRes>(`${environment.apiUrl}/api/actions`, action, { withCredentials: true });
  }
  countAllActionByPostIdUsingByGet(postId: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<CountActionsRes>(`${environment.apiUrl}/api/actions/count-all-action-by-post-id/${postId}`);
  }
  countActionUserByPostIdUsingByGet(postId: number) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<CountActionsRes>(`${environment.apiUrl}/api/actions/get-by-user-and-post/${postId}`, {
      withCredentials: true
    });
  }
}
