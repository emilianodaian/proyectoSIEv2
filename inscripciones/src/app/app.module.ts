import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Servicios Http
import { HttpClientModule } from '@angular/common/http';
// Notificaciones flotantes
import	{ToastrModule} from 'ngx-toastr';

// Componentes creados
import { InscripcionFormComponent } from './Componentes/inscripcion-form/inscripcion-form.component';
import { CarreraFormComponent } from './Componentes/carrera-form/carrera-form.component';
// Para formularios
import { ReactiveFormsModule } from '@angular/forms';

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
    HttpClientModule,
    // ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
