package com.Sofka.controller;

import org.springframework.web.bind.annotation.RestController;

import com.Sofka.domain.Tarjeton;
import com.Sofka.domain.Usuario;
import com.Sofka.service.TarjetonService;
import com.Sofka.service.UsuarioService;
import com.Sofka.util.Response;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import lombok.extern.slf4j.Slf4j;
@Slf4j
@RestController
public class UsuarioController {
	@Autowired
	private UsuarioService UsuarioService;
	private Response response = new Response();
	
	@GetMapping(path="/usuarios")
	@CrossOrigin(origins = "http://localhost:3000")
	  /**
     * Route get all usuarios
     * @return List of usuario
     */
	public  List<Usuario> getUsuarios() {
		List<Usuario>usuarios=null;
        try {
        	usuarios = UsuarioService.ListUsu();

        } catch (Exception e) {
        	  response.error = true;
              response.message = e.getMessage();
              response.status = "ERROR 404, NOT FOUND";
        }
        return usuarios;
	}
	 /**
     * Route to create a usuario
     * @param usuario Object
     * @return Entity
     */
	@PostMapping(path="/usuarios")
	@CrossOrigin(origins = "http://localhost:3000")
	public ResponseEntity<Usuario> crearUsuario(@RequestBody Usuario usuario) {
		try {
			UsuarioService.save(usuario);
			return new ResponseEntity<>(usuario , HttpStatus.CREATED);
		} catch (Exception e) {
			return null;
		}
	}
	
	
}
