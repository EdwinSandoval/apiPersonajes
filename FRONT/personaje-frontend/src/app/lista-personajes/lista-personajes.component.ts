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
  characters: Character[] = [];
  loading =false
  nextUrl: string | null = null;

  
  personajes:ListaPersonajes[]|null=null;
  personaje: PersonajeResponseDto[]=[]
  constructor(private personajeServicio:PersonajeService,private router:Router) { }

  ngOnInit(): void {
  //  this.fetchCharacters
     this.obtenerPersonajes()
    // console.log(this.fetchCharacters())
  }

  // Método para obtener personajes y manejar la paginación
  // fetchCharacters(url: string = ''): void {
  //   this.loading = true;
  //   this.personajeServicio.getCharacters().subscribe((response) => {
  //     this.characters = [...this.characters, ...response.results];
  //     this.nextUrl = response.info.next;
  //     this.loading = false;
  //   });
  // }

  // loadMore(): void {
  //   if (this.nextUrl) {
  //     this.fetchCharacters(this.nextUrl);
  //   }
  // }

  obtenerPersonajes(){
    this.personajeServicio.obtenerListaPersonajes()
    .subscribe(data=> {
      this.characters = [...this.characters, ...data.results];
       console.log(data);
      
    })
  }

 
  
}
