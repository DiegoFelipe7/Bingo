package com.Sofka.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.Sofka.domain.Ruleta;
public interface RuletaDao extends CrudRepository<Ruleta, Long >{ 
	@Query("select balotas from Ruleta rul where rul.tarjetones=:tarjetones")
    public List <Ruleta> BuscarTarjeton(
            @Param(value = "tarjetones") String tarjetones
    );

}

