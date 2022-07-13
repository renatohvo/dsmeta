package com.devsuperior.dsmeta.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmeta.entity.Sale;
import com.devsuperior.dsmeta.services.SaleServices;

@RestController
@RequestMapping(value = "/sales", produces=MediaType.APPLICATION_JSON_VALUE)
public class SaleController {
	
	@Autowired
	private SaleServices saleServices;
	
	@GetMapping
	public List<Sale> findSales(){
		
		return saleServices.findSales();
		
	}
}
