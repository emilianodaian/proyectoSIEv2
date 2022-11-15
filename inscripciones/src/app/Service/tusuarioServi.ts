import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class tusuarioServi  {
  url='http://localhost:2000/tusu/';

  constructor(private http: HttpClient) {}
   //  Get Usuario
   getusu():Observable<any>{
    return this.http.get(this.url);
   };
 
 
 
   
}

export class Tusuario{
 Tusu?:string;
}