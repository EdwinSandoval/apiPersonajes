import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePersonajeComponent} from './detalle-personaje/detalle-personaje.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'personajes',component:DetallePersonajeComponent},
  {path:'',redirectTo:'personajes',pathMatch:'full'},
  {path:'lista-personajes',component:ListaPersonajesComponent},
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' } // Redirige a la página de error
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
