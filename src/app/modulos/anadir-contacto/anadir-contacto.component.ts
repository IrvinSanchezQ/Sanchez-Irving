import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-anadir-contacto',
  templateUrl: './anadir-contacto.component.html',
  styleUrls: ['./anadir-contacto.component.css']
})
export class AnadirContactoComponent implements OnInit {
  info ={
    nombre: 'ejemplo' , 
    apellido: 'apellido ejemplo',
    correo: 'ejemlpo@gmail.com'
  }
constructor() { }

ngOnInit(): void {
}

guardar( formulario:NgForm ){
  console.log( formulario);
}
}
