package com.example.cliente.service;


import com.example.cliente.dto.response.ListaPersonajes;
import com.example.cliente.dto.response.PersonajeResponseDto;

public interface IPersonajeService {
    ListaPersonajes listAll();

    PersonajeResponseDto getPersonajeById(Long id);

    ListaPersonajes nombrePersonaje(String nombre);
}
