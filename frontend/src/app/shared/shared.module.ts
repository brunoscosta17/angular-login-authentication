import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
    declarations: [
    SidebarComponent],
    imports: [
        CommonModule,
        // modules
        FormsModule,
        ReactiveFormsModule,
        FontAwesomeModule
    ], exports: [
        SidebarComponent
    ]
})
export class SharedModule { }
