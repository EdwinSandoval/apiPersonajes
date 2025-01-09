import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';


@Component({
  selector: 'app-detalle-empleado',
  templateUrl: './detalle-empleado.component.html',
  styleUrls: ['./detalle-empleado.component.css']
})
export class DetalleEmpleadoComponent implements OnInit {
  id: number;
  empleado: Empleado;
  constructor() { }

  ngOnInit(): void {
    
  }

}
