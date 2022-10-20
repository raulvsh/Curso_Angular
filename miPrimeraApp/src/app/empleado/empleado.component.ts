import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template: "<p>Aquí iría un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color: red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre="Juan";
  apellido="Diaz";
  //edad=28;
  //empresa="Píldoras informáticas";

 /* getEdad(){
    return this.edad;
  }*/

  /*llamaEmpresa(value:String){
  }*/

  habilitacionCuadro = true;

  usuarioRegistrado = false;

  getRegistroUsuario(){
    this.usuarioRegistrado=true;
  }

  parseInt(value:string){
    return parseInt(value);
  }

  mostrarEdad(value:string){
    let edad=parseInt(value);
    let mensaje;
    if (edad<18){
      mensaje="Menor de edad"
    }
    else if(edad>18){
      mensaje="Mayor de edad";
    } else{
      mensaje="Introduzca la edad";
    }
    return mensaje;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
