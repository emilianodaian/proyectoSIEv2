import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { inscripciones } from '../Models/Inscripciones';

@Injectable({
  providedIn: 'root'
})
export class RegistroMesasService {
  url='http://localhost:2000/api/';
  
  

  constructor(private http: HttpClient) {}
   //  Get Usuario
   getinsc():Observable<any>{
    return this.http.get(this.url);
   };
 // Agregar Usuario
 addinscr(cuil:per):Observable<any>{
   return this.http.post(this.url,cuil);
 }
 
 // Modificar
 editConsul(cuil:per):Observable<any>{
   return this.http.get(this.url)
   
 }

 
  
 chechcuil(cui:string){
  
 }
 
   
}


export class per{
  Cuil?:String;
  Nombre?:string;
  Apellido?:string;
  Email?:string;
  
}
