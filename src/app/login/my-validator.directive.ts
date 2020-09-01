import {AbstractControl, ValidatorFn} from '@angular/forms';


export function password(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const password1 = control.get('password').value;
    const password2 = control.get('password2').value;
    return password1 != null && password2 != null && password1 !== password2 ? {'passwordError': true} : null;
  };
}

