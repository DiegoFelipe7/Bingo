package com.Sofka.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity
@Table(name = "balota")
public class Balota {
	private static final long serialVersionUID = 1L;

	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  @Column(name = "bal_id")
	  private Long id;
	  
	  
	  @Column(name="bal_letra")
	  private String letra;
	  
	  
	  @Column(name="bal_numero")
	  private String numero;


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getLetra() {
		return letra;
	}


	public void setLetra(String letra) {
		this.letra = letra;
	}


	public String getNumero() {
		return numero;
	}


	public void setNumero(String numero) {
		this.numero = numero;
	}
	  
	  

}
