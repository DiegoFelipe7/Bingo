package com.Sofka.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Sofka.domain.Tarjeton;
import com.Sofka.dao.TarjetonDao;
@Service
public class TarjetonService implements ItarjetonService{
	@Autowired
	private TarjetonDao  TarjetonDao;
	@Override
    @Transactional
	public List<Tarjeton> ListTarje() {
		List<Tarjeton> tarjeton=null;
		try {
			tarjeton=(List<Tarjeton>) TarjetonDao.findAll();
			
		} catch (Exception ex) {
			throw ex;
		}
		return tarjeton;
	}

	@Override

    @Transactional
	public Tarjeton save(Tarjeton tarjeton) {
		try {
			return TarjetonDao.save(tarjeton);
		} catch (Exception ex) {
			throw ex;
		}
	}

	@Override
    @Transactional
	public void delete(Tarjeton tarjeton) {
		try {
			TarjetonDao.delete(tarjeton);
		} catch (Exception ex) {
			throw ex;
		}
		
	}

}