import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
    { path: 'home', component: DashboardComponent },
    { path: 'header', component: HeaderComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
