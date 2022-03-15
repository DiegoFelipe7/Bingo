package com.Sofka.service;

import java.util.List;

import com.Sofka.domain.Tarjeton;

public interface ItarjetonService {
	/**
     * Show all the tarjeton
     * @return List of tarjeton
     */
	public List<Tarjeton> ListTarje();
	/**
     * Save a new tarjeton
     * @param tarjeton Object
     * @return tarjeton
     */
	public Tarjeton save(Tarjeton tarjeton);
	
    /**
     * Delete a tarjeton
     * @param tarjeton Object
     */
	public void delete(Tarjeton tarjeton);
}