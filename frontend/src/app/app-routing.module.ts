import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivateGuard } from './core/guards/private.guard';
import { PrivateModule } from './modules/private/private.module';
import { PublicModule } from './modules/public/public.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modules/public/public.module').then(m => PublicModule),
  },
  {
    path: '',
    loadChildren: () => import('src/app/modules/private/private.module').then(m => PrivateModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
