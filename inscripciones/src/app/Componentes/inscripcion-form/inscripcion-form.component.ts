import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

// Formularios
import{ FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
// Inscripciones
import { per, RegistroMesasService } from 'src/app/Service/registro-mesas.service';



// Llamados Mesas

import { Llamado, Ll} from 'src/app/Service/llamado';
// Condicion
import { condicionper } from 'src/app/Service/CondicionSer';
// tipo de usaurio
import { Tusuario, tusuarioServi } from 'src/app/Service/tusuarioServi';





@Component({
  selector: 'app-inscripcion-form',
  templateUrl: './inscripcion-form.component.html',
  styleUrls: ['./inscripcion-form.component.css'],
  providers:[RegistroMesasService]
})
export class InscripcionFormComponent implements OnInit {
  listacarreras: []=[];
  listarmaterias:[]=[];
  condicion:condicionper[]=[];
  Llamadobd:Ll[]=[]

 
  

  Mesas: FormGroup;
   
  constructor(
// formulario
    private fb:FormBuilder,
//  Servicios enlace Api Personas
     private RMservis:RegistroMesasService,
     private tuservis:tusuarioServi,
     private LLamadoservis:Llamado,
 // Condicion
      private cond:condicionper,
 //  Navegador y animaciones
      private router:Router, private toastr: ToastrService,
) { 

       this.Mesas=this.fb.group({
      cuil:['',Validators.required],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      email:['',Validators.required],
      Tusuario:['',Validators.required],
      carrera:['',Validators.required],
      materia:['',Validators.required],
      condicion:['',Validators.required],
      llamado:['',Validators.required]})
  }

  ngOnInit(): void {
    this.Imesas();
    this.LLamadoservis.getlla().subscribe(data=>{
      this.Llamadobd=data
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
   this.RMservis.addinscr(Persona).subscribe(data => {
         
        // mensaje animado
        this.toastr.success('Inscripcion Registrada', 'Tu registro fue Exitoso!');
        },error=>{
                      console.log(error);
                     this.Mesas.reset();
                     })

                     //  ----------------------------------------------------------------------------------------
// tipo de usuario
const tipousario:Tusuario={
  Tusu: this.Mesas.get('tusuario')?.value, 
}

  // ---------------------------------------------------------------------------------------
  // Materias
 

  // ---------------------------------------------------------------------------------------
  // Condicion

  // ---------------------------------------------------------------------------------------
  // Llamados

  // ---------------------------------------------------------------------------------------

    
    
  }

  
}

