import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class PrivateGuard implements CanActivate {

    constructor(
        private router: Router
    ) { }

    canActivate(): boolean {
        if(false) {
            return true;
        } else {
            alert('Please, login!');
            this.router.navigate(['']);
            return false;
        }
    }

}