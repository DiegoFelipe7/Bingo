package com.Sofka.service;
import com.Sofka.domain.Ruleta;

import java.util.List;
public interface IRuleta {
	
	public List<Ruleta> getRuleta();
	
	public Ruleta save(Ruleta ruleta);
}
