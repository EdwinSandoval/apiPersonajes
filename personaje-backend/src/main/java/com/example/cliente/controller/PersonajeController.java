package com.example.cliente.controller;


//import com.example.cliente.dto.request.PersonajeRequestDto;
import com.example.cliente.dto.response.ListaPersonajes;
import com.example.cliente.dto.response.PersonajeResponseDto;
import com.example.cliente.exceptions.exception.NoExisteCliente;
import com.example.cliente.service.IPersonajeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/personaje")
@CrossOrigin(origins = "http://localhost:4200")
public class PersonajeController {
    @Autowired
    private IPersonajeService clienteService;

    @GetMapping("/listar")
    public ResponseEntity<ListaPersonajes> listAll(){
        return  ResponseEntity.ok(clienteService.listAll());
    }

    @GetMapping("/listar/{id}")
    public ResponseEntity<PersonajeResponseDto> buscarPersonaje(@PathVariable(name = "id") Long id){
        try {
            return new ResponseEntity<>(this.clienteService.getPersonajeById(id), HttpStatus.OK);
        }catch (Exception e){
            //se manejo la excepcion aca
            throw new NoExisteCliente("No existe cliente con ese Id");
        }
    }

    @GetMapping("/buscarNombre")
    public ResponseEntity<ListaPersonajes> buscarPersonaje(@RequestParam String name){
        try {
            return new ResponseEntity<>(this.clienteService.nombrePersonaje(name), HttpStatus.OK);
        }catch (Exception e){
            //se manejo la excepcion aca
            throw new NoExisteCliente("Personaje con nombre " + name + " no encontrado");
        }
    }

}
