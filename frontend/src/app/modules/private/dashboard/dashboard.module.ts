import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

// containers
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';

// components

@NgModule({
    declarations: [
        // containers
        DashboardComponent,
        HomeComponent,
        HeaderComponent
        // components

    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        DashboardRoutingModule
    ]
})
export class DashboardModule { }
