import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// containers
import { LoginComponent } from "src/app/modules/private/login/containers/login/login.component";

const routes: Routes = [
    { path: '', component: LoginComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule {

}