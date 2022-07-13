package com.devsuperior.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsmeta.entity.Sale;
import com.devsuperior.dsmeta.repositories.SaleRepository;

@Service
public class SaleServices {
	
	@Autowired
	private SaleRepository saleRepository;
	
	public List<Sale> findSales(){
		
		return saleRepository.findAll();
		
	}

}
