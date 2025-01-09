package com.example.cliente.IFeingClient;


import com.example.cliente.dto.response.ListaPersonajes;
import com.example.cliente.dto.response.PersonajeResponseDto;
import com.example.cliente.model.Personaje;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;


@FeignClient(name = "personaje-service",url = "https://rickandmortyapi.com/api/character/")
public interface IPersonajeClient {

    @GetMapping("/{id}")
    PersonajeResponseDto obtenerId(@PathVariable Long id);

    @GetMapping("/")
    ListaPersonajes obtenerPorNombre(@RequestParam("name") String nombre);

    @GetMapping("/")
    ListaPersonajes obtenerListaPersonajes();
}
