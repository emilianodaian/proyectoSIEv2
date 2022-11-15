import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { condicion} from '../Models/condicion';

@Injectable({
  providedIn: 'root'
})
export class CondicionSer {
  url='http://localhost:2000/con/';

  constructor(private http: HttpClient) {}
   //  Get Usuario
   getcon():Observable<any>{
    return this.http.get(this.url);
   };
 
 
   
}

export class condicionper{
  condicion?:String;
  
}
