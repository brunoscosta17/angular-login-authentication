import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PublicRoutingModule } from "./public-routing.module";
import { ReactiveFormsModule } from "@angular/forms";

// containers
import { PublicComponent } from "./public.component";

// components

@NgModule({
    declarations: [
        // containers
        PublicComponent
    ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        // modules
        ReactiveFormsModule
    ]
})
export class PublicModule { }