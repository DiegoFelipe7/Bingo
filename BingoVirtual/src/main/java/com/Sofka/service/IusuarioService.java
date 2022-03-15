package com.Sofka.service;

import java.util.List;

import com.Sofka.domain.Usuario;

public interface IusuarioService {
	/**
     * Show all the Usuario
     * @return List of Usuario
     */
	public List<Usuario> ListUsu();
	/**
     * Save a new Usuario
     * @param contacto Object
     * @return contact
     */
	public Usuario save(Usuario usuario);
	/**
     * Update a contact
     * @param id Long
     * @param Usuario Object
     * @return Usuario
     */
	public Usuario update(Usuario usuario , Long Id);

    /**
     * Delete a Usuario
     * @param Usuario Object
     */
	public void delete(Usuario usuario);
	
}
