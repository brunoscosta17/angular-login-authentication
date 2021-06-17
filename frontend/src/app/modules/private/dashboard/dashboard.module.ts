import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// modules
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

// containers
import { DashboardComponent } from './dashboard.component';

// components

@NgModule({
    declarations: [
        // containers
        DashboardComponent
        // components

    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        DashboardRoutingModule
    ]
})
export class DashboardModule { }
