package com.Sofka.domain;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

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
@Table(name = "usuario")
public class Usuario {
	  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "usu_id")
  private Long id;
	
	@Column(name="usu_nombre")
	private String nombre;
	
	@Column(name="usu_apellido")
	private String apellido;
	
	@Column(name="usu_correo")
	private String email;
	
	
	@Column(name="id_tarjeton")
	private String _id;


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getNombre() {
		return nombre;
	}


	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


	public String getApellido() {
		return apellido;
	}


	public void setApellido(String apellido) {
		this.apellido = apellido;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String get_id() {
		return _id;
	}


	public void set_id(String _id) {
		this._id = _id;
	}

	

	
	
	


}
