import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

// Formularios
import{ AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, NonNullableFormBuilder, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
// Inscripciones
import { per, RegistroMesasService } from 'src/app/Service/registro-mesas.service';



// Llamados Mesas

import { Llamado} from 'src/app/Service/llamado';
// Condicion
import { condicionper, CondicionSer } from 'src/app/Service/CondicionSer';
// tipo de usaurio
import { Tusuario, tusuarioServi } from 'src/app/Service/tusuarioServi';
// Materias
import { materiaModel, Materias} from 'src/app/Service/Materias';
import { llama } from 'src/app/Models/llamadomaterias';
import { tusuarios } from 'src/app/Models/tususarios';
import {Unidadcurricular}from '../../Models/materias'
import { CondicionEstudiante } from '../../Models/condicion'





@Component({
  selector: 'app-inscripcion-form',
  templateUrl: './inscripcion-form.component.html',
  styleUrls: ['./inscripcion-form.component.css'],
  providers:[RegistroMesasService]
})
export class InscripcionFormComponent implements OnInit {
  listacarreras: []=[];
  listarmaterias:[]=[];
  condicionEst:CondicionEstudiante[]=[];
  Llamadobd:llama[]=[];
  tususelect:tusuarios[]=[];
  Arraymaterias:Unidadcurricular[]=[]

 
  

  Mesas: FormGroup;
   
  constructor(
// formulario
    private fb:FormBuilder,
//  Servicios enlace Api Personas
     private RMservis:RegistroMesasService,
     private tuservis:tusuarioServi,
     private LLamadoservis:Llamado,
     private materiasServis:Materias,
    
 // Condicion
      private cond:CondicionSer,
 //  Navegador y animaciones
      private router:Router, private toastr: ToastrService,
    
      
) { 

       this.Mesas=this.fb.group({
      cuil:['',Validators.compose([Validators.maxLength(11), Validators.required])],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      email:['',Validators.compose([Validators.email, Validators.required])],
      // Tusuario:['',Validators.required],
      // carrera:['',Validators.required],
      // materia:['',Validators.required],
      // condicion:['',Validators.required],
      // Llamadoselc:['',Validators.required]
    })

      
  }

  ngOnInit(): void {
    this.Imesas();
    this.LLamadoservis.getlla().subscribe(data=>{
      this.Llamadobd=data
    })

    this.tuservis.getusu().subscribe(data =>{
      this.tususelect=data;
    })
  
    this.materiasServis.getmaterias().subscribe(data =>{
      this.Arraymaterias=data;
    })
    this.cond.getcon().subscribe(data =>{
      this.condicionEst=data;
    })




    
  }





 


  Imesas(){
  // --------------------------------------------------------------------------------------------------------

 console.log(this.Mesas)
    // Contengo las datos 
     const Persona: per ={
      Cuil: this.Mesas.get('cuil')?.value,
      Nombre: this.Mesas.get('nombre')?.value,
      Apellido: this.Mesas.get('apellido')?.value,
      Email: this.Mesas.get('email')?.value,  
    };
    console.log(Persona);
 //  envio de datos
  //  this.RMservis.addinscr(Persona).subscribe(data => {
         
  //       // mensaje animado
  //       this.toastr.success('Inscripcion Registrada', 'Tu registro fue Exitoso!');
  //       },error=>{
  //                     console.log(error);
                     
  //                    })

                     //  ----------------------------------------------------------------------------------------
// tipo de usuario
const tipousario:Tusuario={
  Tusu: this.Mesas.get('tusuario')?.value, 
}

  // ---------------------------------------------------------------------------------------
  // Materias
 const Materias:materiaModel={
  Materiass:this.Mesas.get('materias')?.value
 }



  // ---------------------------------------------------------------------------------------
  // Condicion

  // ---------------------------------------------------------------------------------------
  // Llamados

  // ---------------------------------------------------------------------------------------

    
 
  
 




  }

 

  
}

