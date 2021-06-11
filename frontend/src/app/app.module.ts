import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/public/containers/login/login.component';
import { PasswordResetComponent } from './modules/public/containers/password-reset/password-reset.component';
import { LoginFormComponent } from './modules/public/components/login-form/login-form.component';
import { PasswordResetFormComponent } from './modules/public/components/password-reset-form/password-reset-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PasswordResetComponent,
    LoginFormComponent,
    PasswordResetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
