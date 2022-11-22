import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Servicios Http
import { HttpClientModule } from '@angular/common/http';
// Notificaciones flotantes
import	{ToastrModule} from 'ngx-toastr';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Componentes creados
import { InscripcionFormComponent } from './Componentes/inscripcion-form/inscripcion-form.component';
import { CarreraFormComponent } from './Componentes/carrera-form/carrera-form.component';
// Para formularios
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { RegistroMesasService, } from './Service/registro-mesas.service';
 import{CondicionSer, condicionper } from './Service/CondicionSer';
import { Ll, Llamado } from './Service/llamado';
import { Tusuario, tusuarioServi } from './Service/tusuarioServi';
import { materiaModel, Materias } from './Service/Materias';





@NgModule({
  declarations: [
    AppComponent,
    InscripcionFormComponent,
    CarreraFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
   

  ],
  providers: [
    condicionper,
    Ll,
    InscripcionFormComponent,
    RegistroMesasService,
    Llamado,
    CondicionSer,
    tusuarioServi,
    Tusuario,
    Materias,
    materiaModel,
    
    

    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
