package com.Sofka.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
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
@Table(name = "tarjeton")
public class Tarjeton {
   @Id
   @Column(name = "tar_id")
   private String _id;

	public String get_id() {
		return _id;
	}
	
	public void set_id(String _id) {
		this._id = _id;
	}

	
	  
	  
	  
}
