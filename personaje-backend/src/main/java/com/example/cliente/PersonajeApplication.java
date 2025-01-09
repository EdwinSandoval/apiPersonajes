package com.example.cliente;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@OpenAPIDefinition(
		info = @Info(
				title = "Mi API",
				version = "1.0",
				description = "Descripción de mi API"
		)
)
@SpringBootApplication
@EnableFeignClients
public class PersonajeApplication {

	public static void main(String[] args) {
		SpringApplication.run(PersonajeApplication.class, args);
	}

}
