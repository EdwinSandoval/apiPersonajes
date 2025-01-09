package com.example.cliente.model;

import com.example.cliente.dto.response.LocationDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;
@Getter // genera todos los getters
@Setter // genera todos los setters
@AllArgsConstructor
@NoArgsConstructor
public class Personaje {

    private Long id;
    private String name;
    private String status;
    private String species;
    private String type;
    private String gender;
    private LocationDto origin;
    private LocationDto location;
    private String image;
    private List<String> episode;
    private String url;
    private String created;

}
