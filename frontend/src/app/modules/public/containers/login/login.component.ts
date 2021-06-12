import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { GenericService } from 'src/app/core/services/generic/generic.service';

import { Login } from 'src/app/shared/models/login.interface';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent {

    formLoading = false;

    eventSubject: Subject<string> = new Subject();

    constructor(
        private genericService: GenericService,
        private authService: AuthService,
        private router: Router) { }

        handleFormSubmit(value: Login): void {
        console.log(value);
        // this.genericService.post('login', value)
        //     .subscribe((response) => {
        //         this.authService.setToken(response.data.access_token, value.rememberMe);
        //         alert('Login successfull!');
        //         this.router.navigate(['dashboard']);
        //     }, (error) => {
        //         this.eventSubject.next('enable');
        //         alert('Wrong login!');
        //     });
    }

}
