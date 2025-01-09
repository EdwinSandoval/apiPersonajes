package com.example.cliente.service;

import com.example.cliente.builders.PersonajeModelBuilder;
import com.example.cliente.dto.response.ListaPersonajes;
import com.example.cliente.dto.response.PersonajeResponseDto;
import com.example.cliente.exceptions.exception.NoExisteCliente;
import com.example.cliente.IFeingClient.IPersonajeClient;
import com.example.cliente.model.Personaje;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
class PersonajeServiceImplTest {

    @InjectMocks
    private PersonajeServiceImpl personajeService;

    @Mock
    private IPersonajeClient iPersonajeClient;

    private Personaje personaje;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        personaje= PersonajeModelBuilder.getPersonajeModel();
    }

    @Test
    public void testListAll() {
        ListaPersonajes esperado= PersonajeModelBuilder.getPersonajesAll();
        when(iPersonajeClient.obtenerListaPersonajes()).thenReturn(esperado);
        ListaPersonajes resultado = personajeService.listAll();
        assertEquals(2,resultado.getResults().size());
        assertEquals("Morty Smith", resultado.getResults().get(0).getName());
        assertEquals("Summer Smith", resultado.getResults().get(1).getName());

    }


    @Test
    public void testGetPersonajeByIdNoExistente() {
        when(iPersonajeClient.obtenerId(9999L)).thenReturn(null);
        assertThrows(NoExisteCliente.class, () -> {
            personajeService.getPersonajeById(999L);
        });
    }

    @Test
    void testGetPersonajeById() {
        // Mock de respuesta esperada
        Long id = 1L;
        PersonajeResponseDto esperado = PersonajeModelBuilder.getPersonajeResponse();
        when(iPersonajeClient.obtenerId(id)).thenReturn(esperado);

        // Llamada al servicio
        PersonajeResponseDto result = personajeService.getPersonajeById(id);
        // Verificaciones
        assertNotNull(result);
        assertEquals(esperado.getId(), result.getId());
        assertEquals("Edwin Sandoval", result.getName());
        assertEquals("Alive", result.getStatus());
        assertEquals("Human", result.getSpecies());
    }

    @Test
    void testNombrePersonaje_Exitoso() {
        // Datos de prueba
        String nombre = personaje.getName();

        // Simulamos la respuesta del cliente Feign
        ListaPersonajes listaPersonajes = new ListaPersonajes();
        PersonajeResponseDto personaje = new PersonajeResponseDto();
        personaje.setId(1L);
        personaje.setName("Rick Sanchez");
        personaje.setStatus("Alive");
        listaPersonajes.setResults(List.of(personaje));

        // Simulamos que el cliente Feign retorna la lista
        when(iPersonajeClient.obtenerPorNombre(nombre)).thenReturn(listaPersonajes);

        // Llamamos al método a probar
        ListaPersonajes result = personajeService.nombrePersonaje(nombre);

        // Verificamos que la lista no esté vacía y que el nombre sea correcto
        assertNotNull(result);
        assertFalse(result.getResults().isEmpty());
        assertEquals("Rick Sanchez", result.getResults().get(0).getName());
    }
}