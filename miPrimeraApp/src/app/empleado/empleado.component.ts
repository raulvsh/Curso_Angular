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
  edad=28;
  empresa="Píldoras informáticas";

  getEdad(){
    return this.edad;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
