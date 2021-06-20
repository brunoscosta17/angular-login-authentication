import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { trimWhiteSpace } from 'src/app/shared/functions/validators.function';
import { FormComponentClass } from 'src/app/shared/directives/form-component.class';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent extends FormComponentClass {

  constructor(
    formBuilder: FormBuilder,
  ) {
    super();
    this.form = formBuilder.group({
      search: ['', Validators.compose([trimWhiteSpace, Validators.required])],
    });
  }

  ngOnInit(): void {
  }

}
