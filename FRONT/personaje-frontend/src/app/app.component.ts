import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gestion de personajes';

  constructor(private router: Router) {}

  isNotFoundPage(): boolean {
    return this.router.url === '/404'; // Ajusta si tu ruta de error 404 es diferente
  }
}
