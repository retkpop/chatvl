import { AbstractControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
export function urlValidator(control: AbstractControl) {
  // tslint:disable-next-line:max-line-length
  if (
    !control.value.startsWith('https://www.youtube.com/watch?v=') &&
    !control.value.startsWith('http://www.youtube.com/watch?v=')
  ) {
    return { urlValid: true };
  }
  return null;
}

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
