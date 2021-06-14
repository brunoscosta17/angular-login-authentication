import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

// modules
import { SharedModule } from "src/app/shared/shared.module";

// containers
import { PasswordResetComponent } from './containers/password-reset/password-reset.component';

// components
import { PasswordResetFormComponent } from "./components/password-reset-form/password-reset-form.component";

@NgModule({
    declarations: [
        // containers
        PasswordResetComponent,
        // components
        PasswordResetFormComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
    ],
    exports: [
        PasswordResetFormComponent
    ]
})
export class LoginModule { }