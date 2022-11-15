import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Llamado {
  url='http://localhost:2000/lla/';

  constructor(private http: HttpClient) {}
   //  Get Usuario
   getlla():Observable<any>{
    return this.http.get(this.url);
   };
 
 
 
   
}

export class Ll{
 llamado?:string;
}