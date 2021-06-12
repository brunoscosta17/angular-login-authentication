import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PublicRoutingModule } from "./public-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

// containers
import { LoginComponent } from "./containers/login/login.component";
import { PasswordResetComponent } from "./containers/password-reset/password-reset.component";

// components
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { PasswordResetFormComponent } from "./components/password-reset-form/password-reset-form.component";
import { DashboardComponent } from './containers/dashboard/dashboard.component';

// components

@NgModule({
    declarations: [
        // containers
        LoginComponent,
        PasswordResetComponent,
        // components
        LoginFormComponent,
        PasswordResetFormComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        // modules
        ReactiveFormsModule
    ]
})
export class PublicModule { }