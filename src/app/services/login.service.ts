import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { User } from '../models/User.model';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient){}
    validateLogin(user: User): Observable<User>{
        return this.http.post<User>('/api/user/login',{
            username : user.username,
            password : user.password
        })
    }
}