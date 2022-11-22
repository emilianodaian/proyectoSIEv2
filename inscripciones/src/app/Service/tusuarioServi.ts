import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { tusuarios } from '../Models/tususarios';


@Injectable({
  providedIn: 'root'
})
export class tusuarioServi  {
  url='http://localhost:2000/tusu/';

  constructor(private http: HttpClient) {}
   //  Get Usuario
   getusu():Observable<any>{
    return this.http.get<tusuarios[]>(this.url);
   };
 
 
 
   
}

export class Tusuario{
 Tusu?:string;
}