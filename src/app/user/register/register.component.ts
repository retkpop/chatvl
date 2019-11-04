import { Component, OnInit } from '@angular/core';
import {environment} from '@env/environment';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService, I18nService} from '@app/core';
import {AccountResourceService, ManagedUserVM} from '@app/core/api-client';
import {MustMatch} from '@app/core/_helpers/validation';
import {MatSnackBar} from '@angular/material';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  version: string | null = environment.version;
  error: string | undefined;
  registerForm!: FormGroup;
  isLoading = false;
  managedUserVM: ManagedUserVM;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private i18nService: I18nService,
    private _snackBar: MatSnackBar,
    private translate: TranslateService,
    private accountResourceService: AccountResourceService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  register() {
    this.isLoading = true;
    if(this.registerForm.valid) {
      this.managedUserVM = new class implements ManagedUserVM {
        activated: boolean;
        authorities: Array<string>;
        createdBy: string;
        createdDate: Date;
        email: string;
        firstName: string;
        id: number;
        imageUrl: string;
        langKey: string;
        lastModifiedBy: string;
        lastModifiedDate: Date;
        lastName: string;
        login: string;
        password: string;
      }
      this.managedUserVM.activated = true;
      this.managedUserVM.authorities = ['ROLE_USER'];
      this.managedUserVM.email = this.registerForm.get('email').value;
      this.managedUserVM.firstName = this.registerForm.get('firstName').value;
      this.managedUserVM.lastName = this.registerForm.get('lastName').value;
      this.managedUserVM.login = this.registerForm.get('username').value;
      this.managedUserVM.password = this.registerForm.get('password').value;
      this.accountResourceService.registerAccountUsingPOST(this.managedUserVM).subscribe(register => {
        this.isLoading = false;
        this.router.navigate(['/login']);
      })
    } else {
      this.isLoading = false;
      this._snackBar.open(this.translate.instant('FieldRequired'), 'Close', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      });
    }
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  private createForm() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      repassword: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      remember: ['', Validators.required],
    },{
        validator: MustMatch('password', 'repassword')
      });
  }

}
