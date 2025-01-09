package com.example.cliente.builders;

import com.example.cliente.dto.response.ListaPersonajes;
import com.example.cliente.dto.response.LocationDto;
import com.example.cliente.dto.response.PersonajeResponseDto;
import com.example.cliente.model.Personaje;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class PersonajeModelBuilder {
//
    public static Personaje getPersonajeModel(){
        Personaje  personaje = new Personaje();
        personaje.setId(1L);
        personaje.setName("Edwin Sandoval");
        personaje.setStatus("Alive");
        personaje.setSpecies("Human");
        personaje.setType("");
        personaje.setGender("Male");

        LocationDto origin = new LocationDto();
        origin.setName("Earth");
        origin.setUrl("https://rickandmortyapi.com/api/location/1");
        personaje.setOrigin(origin);

        LocationDto location = new LocationDto();
        location.setName("Earth");
        location.setUrl("https://rickandmortyapi.com/api/location/1");
        personaje.setLocation(location);

        personaje.setImage("https://rickandmortyapi.com/api/character/avatar/1.jpeg");

        personaje.setEpisode(Arrays.asList(
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/2"
        ));

        personaje.setUrl("https://rickandmortyapi.com/api/character/1");
        personaje.setCreated("2017-11-04T18:48:46.250Z");

        return personaje;
    }

    public static PersonajeResponseDto getPersonajeResponse(){
        PersonajeResponseDto personaje = new PersonajeResponseDto();
        personaje.setId(1L);
        personaje.setName("Edwin Sandoval");
        personaje.setStatus("Alive");
        personaje.setSpecies("Human");
        personaje.setType("");
        personaje.setGender("Male");

        LocationDto origin = new LocationDto();
        origin.setName("Earth");
        origin.setUrl("https://rickandmortyapi.com/api/location/1");
        personaje.setOrigin(origin);

        LocationDto location = new LocationDto();
        location.setName("Earth");
        location.setUrl("https://rickandmortyapi.com/api/location/1");
        personaje.setLocation(location);

        personaje.setImage("https://rickandmortyapi.com/api/character/avatar/1.jpeg");

        personaje.setEpisode(Arrays.asList(
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/2"
        ));

        personaje.setUrl("https://rickandmortyapi.com/api/character/1");
        personaje.setCreated("2017-11-04T18:48:46.250Z");
        return personaje;
    }
//
    public static ListaPersonajes getPersonajesAll(){
        PersonajeResponseDto personaje=new PersonajeResponseDto();
        personaje.setId(2L);
        personaje.setName("Morty Smith");
        personaje.setStatus("Alive");
        personaje.setSpecies("Human");
        personaje.setType("Morty");
        personaje.setGender("Male");

        LocationDto origin = new LocationDto();
        origin.setName("Earth (C-137)");
        origin.setUrl("https://rickandmortyapi.com/api/location/2");
        personaje.setOrigin(origin);

        LocationDto location = new LocationDto();
        location.setName("Citadel of Ricks");
        location.setUrl("https://rickandmortyapi.com/api/location/3");
        personaje.setLocation(location);
        personaje.setImage("https://rickandmortyapi.com/api/character/avatar/2.jpeg");
        personaje.setEpisode(Arrays.asList(
                "https://rickandmortyapi.com/api/episode/3",
                "https://rickandmortyapi.com/api/episode/4"
        ));
        personaje.setUrl("https://rickandmortyapi.com/api/character/2");
        personaje.setCreated("2017-11-04T18:48:46.250Z");

        PersonajeResponseDto personaje2=new PersonajeResponseDto();
        personaje2.setId(3L);
        personaje2.setName("Summer Smith");
        personaje2.setStatus("Alive");
        personaje2.setSpecies("Human");
        personaje2.setType("");
        personaje2.setGender("Female");

        LocationDto origin1 = new LocationDto();
        origin.setName("Earth (C-137)");
        origin.setUrl("https://rickandmortyapi.com/api/location/4");
        personaje2.setOrigin(origin1);

        LocationDto location1 = new LocationDto();
        location.setName("Mars");
        location.setUrl("https://rickandmortyapi.com/api/location/5");
        personaje2.setLocation(location1);

        personaje2.setImage("https://rickandmortyapi.com/api/character/avatar/3.jpeg");

        personaje2.setEpisode(Arrays.asList(
                "https://rickandmortyapi.com/api/episode/5",
                "https://rickandmortyapi.com/api/episode/6"
        ));

        personaje2.setUrl("https://rickandmortyapi.com/api/character/3");
        personaje2.setCreated("2017-11-04T18:48:46.250Z");

        ListaPersonajes listaPersonajes=new ListaPersonajes();
        List<PersonajeResponseDto> personajes = new ArrayList<>();
        personajes.add(personaje);
        personajes.add(personaje2);
        listaPersonajes.setResults(personajes);

        return listaPersonajes;
    }
//
}
