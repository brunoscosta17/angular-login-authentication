import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormComponentClass } from 'src/app/shared/directives/form-component.class';
import { trimWhiteSpace } from 'src/app/shared/functions/validators.function';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent extends FormComponentClass {

  constructor(
    formBuilder: FormBuilder,
  ) {
    super();
    this.form = formBuilder.group({
      email: ['', Validators.compose([trimWhiteSpace, Validators.required])],
    });
  }

}
