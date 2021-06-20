import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormComponentClass } from 'src/app/shared/directives/form-component.class';
import { trimWhiteSpace } from 'src/app/shared/functions/validators.function';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent extends FormComponentClass {

  constructor(
    formBuilder: FormBuilder,
  ) {
    super();
    this.form = formBuilder.group({
      firstName: ['', Validators.compose([trimWhiteSpace, Validators.required])],
      lastName: ['', Validators.compose([trimWhiteSpace, Validators.required])],
    });
  }

  ngOnInit(): void {
  }

}
