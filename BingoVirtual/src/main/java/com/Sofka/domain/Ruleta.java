package com.Sofka.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
/**
 * 
 * Identificamos los atribudos de la tabla con los valores en java
 *
 * @version 1.0.0
 * @author Diego Felipe Muñoz
 * @since 1.0.0
 */
@Data
@Entity
@Table(name = "ruleta")
public class Ruleta {
	private static final long serialVersionUID = 1L;

	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  @Column(name = "id_ruleta")
	  private Long id;
	  
	  @Column(name="tarjeton")
	  private String tarjetones;
	  
	  @Column(name="balota")
	  private String balotas;
	
	  @Column(name="balota_marcada")
	  private String balotas_marcadas;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTarjeton() {
		return tarjetones;
	}

	public void setTarjeton(String tarjeton) {
		this.tarjetones = tarjeton;
	}

	public String getBalotas() {
		return balotas;
	}

	public void setBalotas(String balotas) {
		this.balotas = balotas;
	}

	public String getBalotas_marcadas() {
		return balotas_marcadas;
	}

	public void setBalotas_marcadas(String balotas_marcadas) {
		this.balotas_marcadas = balotas_marcadas;
	}
	
	  
}
