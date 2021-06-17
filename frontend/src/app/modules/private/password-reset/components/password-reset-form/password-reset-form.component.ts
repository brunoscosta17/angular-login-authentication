import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { trimWhiteSpace } from 'src/app/shared/functions/validators.function';
import { FormComponentClass } from 'src/app/shared/directives/form-component.class';

@Component({
  selector: 'app-password-reset-form',
  templateUrl: './password-reset-form.component.html',
  styleUrls: ['./password-reset-form.component.sass']
})
export class PasswordResetFormComponent extends FormComponentClass {

  constructor(
    formBuilder: FormBuilder,
    public changeDetectorRef: ChangeDetectorRef
) {
    super();
    const email = environment.showDefaultLogin ? 'admin' : null;
    const password = environment.showDefaultLogin ? 'admin' : null;
    this.form = formBuilder.group({
        email: ['', Validators.compose([trimWhiteSpace, Validators.required, Validators.email])],
        oldPassword: ['', Validators.compose([trimWhiteSpace, Validators.required])],
        newPassword: ['', Validators.compose([trimWhiteSpace, Validators.required])],
    });
}

}
