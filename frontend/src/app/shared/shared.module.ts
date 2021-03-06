import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrivateRoutingModule } from '../modules/private/private-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    declarations: [
    SidebarComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule,
        PrivateRoutingModule
    ], exports: [
        SidebarComponent
    ]
})
export class SharedModule { }
