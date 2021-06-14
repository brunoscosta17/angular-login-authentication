import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// containers
import { PasswordResetComponent } from "./containers/password-reset/password-reset.component";

const routes: Routes = [
    { path: '', component: PasswordResetComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PasswordResetRoutingModule {

}