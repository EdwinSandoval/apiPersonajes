import { EmpleadoService } from './../services/empleado.service';
import { Empleado } from './../empleado';
import { empleado } from './../models/empleados.modelo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent implements OnInit {

  empleado:Empleado=new Empleado()
  constructor(private empleadoServicio:EmpleadoService,private router:Router) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.empleado);
    this.guardaEmpleados()
  }

  guardaEmpleados(){
    this.empleadoServicio.guardarEmpleado(this.empleado)
    .subscribe(data=> {
      console.log('hoaaa',data);
      this.irAListaEmpleados()
    },error=>console.log(error))
  }

  irAListaEmpleados(){
    this.router.navigate(['/empleados'])
  }

}
