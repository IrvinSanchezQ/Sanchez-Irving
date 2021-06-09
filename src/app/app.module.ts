import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnadirContactoComponent } from './modulos/anadir-contacto/anadir-contacto.component';
import { ListaContactosComponent } from './modulos/lista-contactos/lista-contactos.component';
import { NavBarComponent } from './modulos/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AnadirContactoComponent,
    ListaContactosComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
