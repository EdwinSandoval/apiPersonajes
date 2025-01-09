package com.example.cliente.dto.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ListaPersonajes {

    private InfoDto info;
    private List<PersonajeResponseDto> results;
}
