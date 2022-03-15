package com.Sofka.dao;

import org.springframework.data.repository.CrudRepository;
import com.Sofka.domain.Usuario;
public interface UsuarioDao extends CrudRepository<Usuario, Long>{

}
