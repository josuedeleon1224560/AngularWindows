import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado1',
  templateUrl: './empleado1.component.html',
  styleUrls: ['./empleado1.component.css']
})
export class Empleado1Component implements OnInit {

  nombre= "Juan";
  apellido= "Díaz";
  private edad=18;
  edad1= 8; 
  //empresa= "Los Dolores";

  HabilitacionCuadro=false;
  UsuarioRegistrado=false;

  getRegistroUsuario()
  {
    this.UsuarioRegistrado=false;
  }

    TextoDeRegistro="No hay nadie registrado";
  SetUsuarioRegistrado(event:Event)
  {
   // alert("El usuario se acaba de registrar");
   //this.TextoDeRegistro="El usuario se acaba de registrar";
   if((<HTMLInputElement>event.target).value=="si")
   {
    this.TextoDeRegistro="El usuario se acaba de registrar";
   }
   else
   {
     this.TextoDeRegistro="No hay nadie registrado";
   }
  }

  getEdad()
  {
    return this.edad;
  }

  constructor() { }

  ngOnInit() {
  }

}
