import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { User } from '../models/User.model';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient){}
    validateLogin(user: User): Observable<Object> {
        return this.http.post<Object>('http://localhost:3000/login', {
            email : user.username,
            password : user.password
        });
    }
}
