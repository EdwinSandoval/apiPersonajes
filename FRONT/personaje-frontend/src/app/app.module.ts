import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';

@NgModule({
  declarations: [
    AppComponent,
    DetallePersonajeComponent,
    ListaPersonajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
