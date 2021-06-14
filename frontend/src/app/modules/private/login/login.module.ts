import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

// modules
import { SharedModule } from "src/app/shared/shared.module";
import { LoginRoutingModule } from "./login-routing.module";

// containers
import { LoginComponent } from "./containers/login/login.component";

// components
import { LoginFormComponent } from "./components/login-form/login-form.component";

// components

@NgModule({
    declarations: [
        // containers
        LoginComponent,
        // components
        LoginFormComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        LoginRoutingModule
    ]
})
export class LoginModule { }