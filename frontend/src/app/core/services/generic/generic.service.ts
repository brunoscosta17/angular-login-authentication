import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";

@Injectable({ providedIn: 'root' })
export class GenericService {

    private baseUrl: string = environment.baseUrl;

    constructor(private http: HttpClient) { }

    get(route: string): Observable<any> {
        return this.http.get(`${this.baseUrl}/${route}`);
    }

    post(route: string, value: any): Observable<any> {
        return this.http.post(`${this.baseUrl}/${route}`, value);
    }

}