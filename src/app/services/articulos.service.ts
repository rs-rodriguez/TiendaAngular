import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Articulo } from '../models/Articulo.model';

@Injectable()
export class ArticulosService {
    constructor(private http: HttpClient){}
    getAllArticulo(): Observable<Articulo[]>{
        return this.http.get<Articulo[]>('http://localhost:3000/articulos/all');
    }
}