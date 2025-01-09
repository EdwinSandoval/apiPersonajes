import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePersonajeComponent} from './detalle-personaje/detalle-personaje.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';

const routes: Routes = [
  {path:'personajes',component:DetallePersonajeComponent},
  {path:'',redirectTo:'personajes',pathMatch:'full'},
  {path:'lista-personajes',component:ListaPersonajesComponent},
  // {path:'actualizar-empleado/:id',component:ActualizarEmpleadoComponent},
  // {path:'empleado-detalle/:id',component:DetalleEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
