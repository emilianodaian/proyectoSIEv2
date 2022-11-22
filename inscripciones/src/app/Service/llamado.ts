import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { llama } from '../Models/llamadomaterias';


@Injectable({
  providedIn: 'root'
})
export class Llamado {
  url='http://localhost:2000/lla/';

  constructor(private http: HttpClient) {}
   //  Get Usuario
   getlla():Observable<any>{
    return this.http.get<llama[]>(this.url);
   };
 
 
   
  }
   


export class Ll{
 llamado?:string;
}