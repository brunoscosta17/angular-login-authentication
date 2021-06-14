import { Component, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { trimWhiteSpace } from 'src/app/shared/functions/validators.function';
import { FormComponentClass } from 'src/app/shared/directives/form-component.class';


@Component({
    selector: 'app-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent extends FormComponentClass {

    constructor(
        formBuilder: FormBuilder,
        public changeDetectorRef: ChangeDetectorRef
    ) {
        super();
        const email = environment.showDefaultLogin ? 'admin' : null;
        const password = environment.showDefaultLogin ? 'admin' : null;
        this.form = formBuilder.group({
            email: ['admin@email.com', Validators.compose([trimWhiteSpace, Validators.required, Validators.email])],
            password: ['admin', Validators.compose([trimWhiteSpace, Validators.required])],
            rememberMe: [false]
        });
    }

}
