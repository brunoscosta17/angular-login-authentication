import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/services/auth/auth.service";

@Component({
    selector: 'app-private',
    templateUrl: './private.component.html',
    styleUrls: ['./private.component.sass']
})
export class PrivateComponent implements OnInit {

    administrator: any;

    constructor(
        private router: Router,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
    }

    logout(): void {
        this.authService.removeToken();
        alert('Logout sucessfull!');
        this.router.navigate(['login']);
    }

}