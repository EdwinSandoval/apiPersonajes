import { Component, OnInit } from '@angular/core';
import { Character, ListaPersonajes, PersonajeResponseDto } from '../personaje';
import { Router } from '@angular/router';
import { PersonajeService } from '../servicios/personaje.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.scss']
})
export class ListaPersonajesComponent implements OnInit{
  characters: PersonajeResponseDto[] = [];
  loading =false

  constructor(private personajeServicio:PersonajeService,private router:Router) { }

  ngOnInit(): void {
     this.obtenerPersonajes()
    // console.log(this.fetchCharacters())
  }


  obtenerPersonajes(){
    this.personajeServicio.obtenerListaPersonajes()
    .subscribe(data=> {
      this.characters = [...this.characters, ...data.results];
       console.log(data);
      
    })
  }

 
  
}
