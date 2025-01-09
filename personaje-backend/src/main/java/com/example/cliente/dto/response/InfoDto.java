package com.example.cliente.dto.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InfoDto {


    private int count;
    private int pages;
    private String next;
    private String prev;

}
