export class inscripciones{
   
    cuil: string;
    nombre: string;
    apellido:string;
    email:string;
   

    constructor(cuil:string, nombre:string, apellido:string,email:string){ 
       
        this.cuil= cuil;
        this.nombre= nombre;
        this.apellido= apellido;
        this.email= email;
        
        
    }
}