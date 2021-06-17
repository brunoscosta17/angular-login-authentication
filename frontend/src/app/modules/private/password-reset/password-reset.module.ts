import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginRoutingModule } from './password-reset-routing.module';

// containers
import { PasswordResetComponent } from './containers/password-reset/password-reset.component';

// components
import { PasswordResetFormComponent } from './components/password-reset-form/password-reset-form.component';

// components

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
        LoginRoutingModule
    ]
})
export class PasswordResetModule { }
