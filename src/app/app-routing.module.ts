import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnadirContactoComponent } from './modulos/anadir-contacto/anadir-contacto.component';
import { ListaContactosComponent } from './modulos/lista-contactos/lista-contactos.component';

const routes: Routes = [
{path: 'anadir_contactos', component: AnadirContactoComponent},
{path: 'lista-contactos', component: ListaContactosComponent},
{path: '**', pathMatch: 'full', redirectTo: 'anadir-contactos' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
