import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarreraFormComponent } from './Componentes/carrera-form/carrera-form.component';
// Componentes
import { InscripcionFormComponent } from './Componentes/inscripcion-form/inscripcion-form.component';

const routes: Routes = [
{path:'',component:InscripcionFormComponent},
{path:'carrera', component:CarreraFormComponent},
{path:'**', redirectTo:'', pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
