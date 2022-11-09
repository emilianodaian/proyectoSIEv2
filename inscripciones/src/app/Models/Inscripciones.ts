export class inscripciones{
   
    cuil: string;
    nombre: string;
    apellido:string;
    email:string;
    carrera:string;

    constructor(cuil:string, nombre:string, apellido:string,email:string,carrera:string){ 
       
        this.cuil= cuil;
        this.nombre= nombre;
        this.apellido= apellido;
        this.email= email;
        this.carrera= carrera;
    }
}