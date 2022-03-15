package com.Sofka.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Sofka.domain.Ruleta;
import com.Sofka.domain.Usuario;
import com.Sofka.dao.RuletaDao;
/**
 * servicio de contactos que implementa los metodos de una interface
 *
 * @version 1.0.0
 * @author Diego Felipe Muñoz
 * @since 1.0.0
 */
@Service
public class RuletaService implements IRuleta{
	@Autowired
	private RuletaDao RuletaDao;
	@Override
	@Transactional
	public List<Ruleta> getRuleta() {
		List<Ruleta> ruleta=null;
		try {
			ruleta=(List<Ruleta>) RuletaDao.findAll();
			
		} catch (Exception ex) {
			throw ex;
		}
		return ruleta;
		
	}

	@Override
	@Transactional
	public Ruleta save(Ruleta ruleta) {
		try {
			return  RuletaDao.save(ruleta);
		} catch (Exception ex) {
			throw ex;
		}
		
	}
	
	public List<Ruleta> datosBingo(String id){
		try {
			return RuletaDao.BuscarTarjeton(id);
		} catch (Exception ex) {
			throw ex;
		}
	}

}
