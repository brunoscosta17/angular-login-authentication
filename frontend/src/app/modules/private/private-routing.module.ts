import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/containers/login/login.component";
import { PasswordResetComponent } from "./password-reset/containers/password-reset/password-reset.component";

// containers
import { PrivateComponent } from "./private.component";

const routes: Routes = [
    { 
        path: '',
        component: PrivateComponent,
        children: [
            { path: '', component: LoginComponent },
            { path: 'password-reset', component: PasswordResetComponent },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]    
})
export class PrivateRoutingModule { }