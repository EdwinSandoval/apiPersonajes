package com.example.cliente.service;


import com.example.cliente.dto.response.ListaPersonajes;
import com.example.cliente.dto.response.PersonajeResponseDto;
import com.example.cliente.exceptions.exception.NoExisteCliente;
import com.example.cliente.IFeingClient.IPersonajeClient;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PersonajeServiceImpl implements IPersonajeService {

    @Autowired()
    private IPersonajeClient iPersonajeClient;

    @Override
    public ListaPersonajes listAll() {
        ListaPersonajes per= this.iPersonajeClient.obtenerListaPersonajes();
        return this.iPersonajeClient.obtenerListaPersonajes();

    }

    @Override
    public PersonajeResponseDto getPersonajeById(Long id) {
        PersonajeResponseDto responseDto= iPersonajeClient.obtenerId(id);
        return Optional.ofNullable(responseDto)
                .orElseThrow(() -> new NoExisteCliente("Personaje con ID " + id + " no encontrado"));

    }

    @Override
    public ListaPersonajes nombrePersonaje(String nombre) {
        ListaPersonajes responseDto= iPersonajeClient.obtenerPorNombre(nombre);
        return Optional.ofNullable(responseDto)
                .orElseThrow(() -> new NoExisteCliente("Personaje con nombre " + nombre + " no encontrado"));
    }

}
