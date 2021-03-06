import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// containers
import { PublicComponent } from './public.component';

// components
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { MainComponent } from './home/main/main.component';
import { FooterComponent } from './home/footer/footer.component';
import { PrivateRoutingModule } from '../private/private-routing.module';

// components

@NgModule({
    declarations: [
        // containers
        PublicComponent,
        // components
        HomeComponent,
        HeaderComponent,
        MainComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PublicRoutingModule,
        PrivateRoutingModule,
        // modules
        ReactiveFormsModule,
    ]
})
export class PublicModule { }
