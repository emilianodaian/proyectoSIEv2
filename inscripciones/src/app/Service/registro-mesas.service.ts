import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { observable, Observable } from 'rxjs';
import { inscripciones } from '../Models/Inscripciones';

@Injectable({
  providedIn: 'root'
})
export class RegistroMesasService {
  url='http://localhost:2000/api/';

  constructor(private http: HttpClient) {
    //  Get Usuario
   /* getinsc():observable<any>{
     return this.http.get(this.url);
    };
  // Agregar Usuario
  addinscr(cuil:inscripciones):Observable<any>{
    return this.http.post(this.url, cuil);
  }
  
  // Modificar
  editConsul(id:string, Carrera:inscripciones){
    return this.http.put(this.url+'/'+id,Carrera)
  }*/
  }
   
}
