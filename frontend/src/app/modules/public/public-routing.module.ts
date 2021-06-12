import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./containers/login/login.component";
import { PasswordResetComponent } from "./containers/password-reset/password-reset.component";

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'password-reset', component: PasswordResetComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]    
})
export class PublicRoutingModule { }