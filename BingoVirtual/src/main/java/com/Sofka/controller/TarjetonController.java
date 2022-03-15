package com.Sofka.controller;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Sofka.domain.Tarjeton;
import com.Sofka.service.TarjetonService;
import com.Sofka.util.Response;

import lombok.extern.slf4j.Slf4j;
/**
 *rutas del la clase tarjetones
 *
 * @version 1.0.0
 * @author Diego Felipe Muñoz
 * @since 1.0.0
 */
@Slf4j
@RestController
public class TarjetonController {
	@Autowired
	private TarjetonService TarjetonService;
	private Response response = new Response();
	 
	/**
     * Route to create a tarjeton
     * @param tarjeton Object
     * @return Entity
     */
	@PostMapping(path="/tarjeton")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Tarjeton> crearTarjeton (@RequestBody Tarjeton tarjeton){
		try {
			TarjetonService.save(tarjeton);
			return new ResponseEntity<>(tarjeton , HttpStatus.CREATED);
		} catch (Exception e) {
			response.status = e.getCause().toString();
            response.error = true;
            return new ResponseEntity<>(HttpStatus.NOT_ACCEPTABLE);
		}
	}
	
}
