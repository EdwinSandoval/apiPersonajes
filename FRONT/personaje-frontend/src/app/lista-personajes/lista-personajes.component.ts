import { Component, OnInit } from '@angular/core';
import { ListaPersonajes, PersonajeResponseDto } from '../personaje';
import { Router } from '@angular/router';
import { PersonajeService } from '../servicios/personaje.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.scss']
})
export class ListaPersonajesComponent implements OnInit{

  personajes:ListaPersonajes[]|null=null;
  constructor(private personajeServicio:PersonajeService,private router:Router) { }

  ngOnInit(): void {
   
    this.obtenerPersonajes()
    console.log(this.obtenerPersonajes())
  }

  obtenerPersonajes(){
    this.personajeServicio.obtenerListaPersonajes()
    .subscribe(data=> {
      this.personajes=data;
      console.log(data);
      
    })
  }
}
