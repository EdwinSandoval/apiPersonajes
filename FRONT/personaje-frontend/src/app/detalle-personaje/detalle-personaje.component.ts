// import { Component } from '@angular/core';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { PersonajeResponseDto } from '../personaje';
import { PersonajeService } from '../servicios/personaje.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.scss']
})
export class DetallePersonajeComponent implements OnInit  {

  personaje:PersonajeResponseDto|null=null;
  loading: boolean = false; // Para mostrar un spinner mientras carga
  error: string = ''; // Para manejar errores
  searchQuery: string = ''; // La variable que enlazará el valor del input
  results: PersonajeResponseDto|null=null;
  id: number = 0

  constructor(private personajeServicio:PersonajeService,private router:Router) { }

  ngOnInit(): void {
   
    //this.obtenerPersonaje(1)
    
  }

  // search() {
  //   this.loading = true;
  //   // Simula una llamada HTTP (puedes reemplazarla con una llamada real)
  //   setTimeout(() => {
  //     this.results = this.personaje
  //     this.loading = false;
  //   }, 1000);
  // }
  
  buscarPersonaje() {
    if (this.id <= 0) {
      this.error = 'Por favor ingrese un ID válido.';
      return;
    }
    
    this.loading = true;
    this.error = '';
    
    this.obtenerPersonaje(this.id);
  }

  obtenerPersonaje(id: number): void {
    this.loading = true;  // Inicia el loading
    this.personajeServicio.obtenerPersonajeId(id)
      .subscribe({
        next: (data) => {
          this.personaje = data;  // Guarda la respuesta del servicio
          console.log(data); // Para depuración
          this.loading = false; // Termina el loading
        },
        error: (err) => {
          this.error = 'Error al obtener personaje';  // Muestra mensaje de error
          this.loading = false;  // Termina el loading
          console.error(err);  // Para depuración
        }
      });
  }
}
