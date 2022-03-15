package com.Sofka.service;

import java.util.List;


import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.Sofka.dao.UsuarioDao;
import com.Sofka.domain.Usuario;
/**
 * servicio de contactos que implementa los metodos de una interface
 *
 * @version 1.0.0
 * @author Diego Felipe Muñoz
 * @since 1.0.0
 */
@Service
public class UsuarioService implements IusuarioService {
	@Autowired
	private UsuarioDao UsuarioDao;
	@Override
    @Transactional
	public List<Usuario> ListUsu() {
		List<Usuario> usuario=null;
		try {
			usuario=(List<Usuario>) UsuarioDao.findAll();
			
		} catch (Exception ex) {
			throw ex;
		}
		return usuario;
	}

	@Override
    @Transactional
	public Usuario save(Usuario usuario) {
		try {
			return UsuarioDao.save(usuario);
		} catch (Exception ex) {
			throw ex;
		}
	}

	@Override
    @Transactional
	public Usuario update(Usuario usuario, Long Id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
    @Transactional
	public void delete(Usuario usuario) {
		try {
			 UsuarioDao.delete(usuario);
		} catch (Exception ex) {
			throw ex;
		}
		
	}

}
