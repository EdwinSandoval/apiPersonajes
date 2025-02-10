import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaPersonajes, PersonajeResponseDto } from '../personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

   //esta url obtiene el listado de todos los empleados
   private baseUrl="http://localhost:8003/personaje/listar"

   constructor(private httpClient:HttpClient) { }
 
 
   //metodo obtiene todos los empleados
   obtenerListaPersonajes():Observable<ListaPersonajes>{
     return this.httpClient.get<ListaPersonajes>(`${this.baseUrl}`);
 
   }
 
   obtenerPersonajeId(id:number):Observable<PersonajeResponseDto>{
     return this.httpClient.get<PersonajeResponseDto>(`${this.baseUrl}/${id}`)
   }

 
  
}
