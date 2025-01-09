// import { Component } from '@angular/core';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { PersonajeResponseDto } from '../personaje';
import { PersonajeService } from '../servicios/personaje.service';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';


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

  descargarPDF() {
    const doc = new jsPDF({
      orientation: 'portrait', // orientación: 'portrait' (vertical) o 'landscape' (horizontal)
    unit: 'mm', // unidad: 'pt', 'mm', 'cm', 'in'
    format: 'a4', // tamaño del PDF: 'a4', 'letter', etc.
    });

    // Seleccionar el área que deseas capturar del HTML (en este caso, el div con id="personaje-content")
    const contenido = document.getElementById('personaje-content');

    if (!contenido) {
      console.error('No se encontró el elemento con id "personaje-content".');
      return; // Salir si el elemento no existe
    }
    // Capturar todo el contenido HTML dentro de este div y generar el PDF
    doc.html(contenido, {
      callback: function (doc) {
        // Descargar el archivo PDF
        doc.save('personaje-detalles.pdf');
      },
      x: 10, // Margen izquierdo
      y: 10, // Margen superior
      html2canvas: {
        scale: 0.3,
        width: 180, // Ajusta el escalado del contenido dentro del PDF
      },
    });
  }
  
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
