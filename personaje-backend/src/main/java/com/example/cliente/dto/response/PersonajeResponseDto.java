package com.example.cliente.dto.response;

import lombok.*;

import java.util.Date;
import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class PersonajeResponseDto {

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
