import { Component, OnInit } from '@angular/core';
import { inscripciones } from 'src/app/Models/Inscripciones';
import { RegistroMesasService } from 'src/app/Service/registro-mesas.service';
import{Router} from '@angular/router';
import{ FormBuilder, FormGroup, Validators} from '@angular/forms';
// import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-inscripcion-form',
  templateUrl: './inscripcion-form.component.html',
  styleUrls: ['./inscripcion-form.component.css']
})
export class InscripcionFormComponent implements OnInit {

   Mesas:FormGroup;


  constructor( private fb:FormBuilder, private RM:RegistroMesasService,
    private Insc:inscripciones) { 
      this.Mesas=this.fb.group({
      cuil:['',Validators.required],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      email:['',Validators.required],
      carrera:['',Validators.required],
      
    })
  }

  ngOnInit(): void {}
  Imesas(){
     /*const Insc: inscripciones ={
      cuil: this.Insc.get('cuil')?.value,
      nombre: this.Insc.get('nombre')?.value,
      apellido: this.Insc.get('apellido')?.value,
      email: this.Insc.get('email')?.value,
      carrera:this.Insc.get('carrera')?.value
    };
    console.log(Insc);
    this.RM.addUsuario(Insc).subscribe(data => {
         this.ruter.navigate(['']);
        this.toastr.success('Usuario Registrado', 'Tu registro fue Exitoso!');
        },error=>{
                      console.log(error);
                     this.Mesas.reset();
                     }
    
    }*/
  }
}
