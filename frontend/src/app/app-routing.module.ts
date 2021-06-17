import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// guards
import { PrivateGuard } from './core/guards/private.guard';

import { HomeComponent } from './modules/public/home/home.component';
import { PrivateModule } from './modules/private/private.module';

const routes: Routes = [
    {
        path: '', component: HomeComponent,
    },
    {
        path: 'admin',
        loadChildren: () => import('src/app/modules/private/private.module').then(m => PrivateModule),
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
