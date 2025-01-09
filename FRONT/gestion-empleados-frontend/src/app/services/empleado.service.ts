import { empleado } from './../models/empleados.modelo';
import { Empleado } from './../empleado';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

 
  //esta url obtiene el listado de todos los empleados
  private baseUrl="http://localhost:8080/api/v1/empleados"
  constructor(private httpClient:HttpClient) { }


  //metodo obtiene todos los empleados
  obtenerListaEmpleados():Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseUrl}`);

  }
  //metodo guardar empleado
  guardarEmpleado(empleado:Empleado):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,empleado)
  }

  actualizarEmpleado(id:number,empleado:Empleado):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/{id}`,empleado)
  }

  obtenerEmpleadoId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseUrl}/{id}`)
  }

  eliminarEmpleado(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`)
  }

}
