import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// modules
import { PublicModule } from '../public/public.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PrivateRoutingModule } from './private-routing.module';
import { LoginModule } from './login/login.module';
import { PasswordResetModule } from './password-reset/password-reset.module';

// containers
import { PrivateComponent } from './private.component';

// components
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';


@NgModule({
    declarations: [
        // containers
        PrivateComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PrivateRoutingModule,
        SharedModule,
        PublicModule,
        LoginModule,
        PasswordResetModule,
    ]
})
export class PrivateModule { }
