import { Router } from '@angular/router';
import { ActualizarEmpleadoComponent } from './../actualizar-empleado/actualizar-empleado.component';
import { EmpleadoService } from './../services/empleado.service';
import { empleado } from './../models/empleados.modelo';
import { Empleado } from './../empleado';


import { Component, OnInit, enableProdMode } from '@angular/core';
// import { Empleado } from '../empleado';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent implements OnInit {


  empleados:Empleado[];

  constructor(private empleadoServicio:EmpleadoService,private router:Router) { }

  ngOnInit(): void {
    // this.empleados=[{
    //   "id":1,
    //   "nombre":"Edwin",
    //   "apellido":"Sandoval",
    //   "email":"edwin@gmail.com"
    // },
    // {
    //   "id":2,
    //   "nombre":"Fredy",
    //   "apellido":"Sandoval",
    //   "email":"fred@gmail.com"
    // }]
    this.obtenerEmpleados()
  }
  
  actualizarEmpleado(id:number){
    this.router.navigate(['actualizar-empleado',id])
  }

  eliminarEmple(id:number){
    this.empleadoServicio.eliminarEmpleado(id)
    .subscribe(data=>{
      console.log('eliminanr',data);
      this.obtenerEmpleados()
    })
  }

  verDetalleEmpleado(id:number){
    this.router.navigate(['empleado-detalle',id])
  }

  obtenerEmpleados(){
    this.empleadoServicio.obtenerListaEmpleados()
    .subscribe(data=> {
      this.empleados=data;
      console.log(data);
      
    })
  }
  
}
