import { Component, OnInit } from '@angular/core';
import { ServicioListaService } from 'src/app/servicios/servicio-lista.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent  {

  contactos=[];
  constructor(private servicios:ServicioListaService) {
    console.log(this.servicios.getc());
    this.contactos = this.servicios.getc();

   }

}
