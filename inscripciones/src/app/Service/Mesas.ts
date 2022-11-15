import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Materias {
  url='http://localhost:2000/mat/';

  constructor(private http: HttpClient) {}
   //  Get Materias
   getlla():Observable<any>{
    return this.http.get(this.url);
   };
 
 
 
   
}

export class materia{
 Materias?:string;
}