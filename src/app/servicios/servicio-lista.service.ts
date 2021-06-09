import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioListaService {

  contactos = [
    { id: 11, nombre: 'Fernando', apellidos: 'Ureña Gómez', genero:
   'hombre', descripcion: 'Instructor' },
    { id: 12, nombre: 'María', apellidos: 'Pérez Almendro', genero:
   'mujer', descripcion: 'Amiga de la infancia' },
    { id: 13, nombre: 'Federico', apellidos: 'Caballero Sánchez',
   genero: 'hombre', descripcion: 'Compañero de trabajo' }
   ];

  constructor() {}
    getc(){
      return this.contactos;
    }
  
}
