package com.Sofka.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import com.Sofka.service.RuletaService;
import com.Sofka.util.Response;
import com.Sofka.domain.Ruleta;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class RuletaController {
	@Autowired
	private RuletaService RuletaService;
	private Response response = new Response();
	
	@GetMapping(path="/balota/{id}")
	@CrossOrigin(origins = "http://localhost:3000")
	  /**
     * Route get all ruleta
     * @return List of balotas
     */
	
	public List<Ruleta> getRuleta( @PathVariable("id") String id){
		List<Ruleta> balota=null;
		try {
			balota=RuletaService.datosBingo(id);
			
		} catch (Exception e) {
			  response.error = true;
              response.message = e.getMessage();
              response.status = "ERROR 404, NOT FOUND";
		}
		return balota;
	}

}
