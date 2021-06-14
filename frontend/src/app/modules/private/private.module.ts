import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

// modules
import { PublicModule } from "../public/public.module";
import { LoginModule } from "./login/login.module";
import { SharedModule } from "src/app/shared/shared.module";
import { PrivateRoutingModule } from "./private-routing.module";

// containers
import { PrivateComponent } from "./private.component";


@NgModule({
    declarations: [
        // containers
        PrivateComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PrivateRoutingModule,
        SharedModule,
        PublicModule,
        LoginModule,
    ]
})
export class PrivateModule { }