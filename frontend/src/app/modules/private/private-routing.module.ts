import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// containers
import { PrivateComponent } from './private.component';

// components
import { LoginComponent } from './login/containers/login/login.component';
import { PasswordResetComponent } from './password-reset/containers/password-reset/password-reset.component';

const routes: Routes = [
    {
        path: '',
        component: PrivateComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'password-reset', component: PasswordResetComponent },
            {
                path: 'dashboard',
                loadChildren: () => import('src/app/modules/private/dashboard/dashboard.module').then(m => m.DashboardModule),
            },
            { path: '**', redirectTo: 'admin', pathMatch: 'full' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PrivateRoutingModule { }
