import { Component, OnDestroy, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '@env/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '@app/core/service/post.service';
import { urlValidator } from '@app/core/_helpers/validation';
import { PostMapping } from '@app/core/_helpers/postMapping';
import { Videos } from '@app/core/models/Videos';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, OnDestroy {
  error: string | undefined;
  addForm!: FormGroup;
  isLoading = false;
  version: string | null = environment.version;
  submitted = false;
  checkLoading = false;
  postMapping = new Videos();
  hashtag: [];
  player: YT.Player;
  categories: Select2DTO;
  /**
   *  router
   *  route
   *  formBuilder
   *  postService
   */
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {
    this.createForm();
  }
  ngOnInit() {
    this.getCategories();
  }
  ngOnDestroy() {}

  getCategories() {
    this.postService.getCategories().subscribe(
      categories => {
        this.categories = categories;
        console.log(this.categories);
      },
      errorCat => {
        console.log(errorCat.error.errorKey);
      }
    );
  }
  onClickSubmit(): void {
    this.isLoading = true;
    this.submitted = true;
    this.error = '';
    this.postService
      .addVideo(this.addForm.value)
      .pipe()
      .subscribe(
        datas => {
          this.checkLoading = false;
          this.isLoading = false;
          console.log(datas);
        },
        error1 => {
          this.checkLoading = false;
          this.isLoading = false;
          window.scrollTo(0, 100);
          this.error = error1.error.errorKey;
          console.log(error1.error.errorKey);
        }
      );
  }

  onReset() {
    this.submitted = false;
    this.addForm.reset();
  }

  onLinkChange(keyValue: any): void {
    this.checkLoading = true;
    if (this.addForm.controls.urlVideo.status === 'VALID') {
      this.postService
        .checkVideo(keyValue)
        .pipe()
        .subscribe(posts => {
          this.checkLoading = false;
          if (posts.items.length > 0) {
            this.postMapping = PostMapping(posts);
            this.addForm.patchValue({
              title: this.postMapping.title,
              hashtag: this.postMapping.tags
            });
          } else {
            this.addForm.controls.urlVideo.setErrors({ incorrect: true });
            this.addForm.patchValue({
              title: '',
              hashtag: []
            });
          }
        });
    } else {
      this.postMapping = null;
    }
  }

  savePlayer(player: any) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event: any) {
    console.log('player state', event.data);
  }

  private createForm() {
    this.addForm = this.formBuilder.group({
      urlVideo: ['', [Validators.required, urlValidator]],
      title: ['', Validators.required],
      catId: ['', Validators.required],
      hashtag: ['', Validators.compose(null)]
    });
  }
}
