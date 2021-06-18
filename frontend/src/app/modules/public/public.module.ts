import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

// containers
import { PublicComponent } from './public.component';

// components
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';

// components

@NgModule({
    declarations: [
        // containers
        PublicComponent,
        // components
        HomeComponent,
        HeaderComponent
    ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        // modules
        ReactiveFormsModule
    ]
})
export class PublicModule { }