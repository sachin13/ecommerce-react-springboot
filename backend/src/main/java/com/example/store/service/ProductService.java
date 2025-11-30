package com.example.store.service;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.example.store.model.Product;
import org.springframework.cache.annotation.Cacheable;

@Service
public class ProductService {
	
	private final  String BASE="https://fakestoreapi.com/products";
	
	private final RestTemplate rest= new RestTemplate();
	
	
	
	@Cacheable("products")
	public Product[]getAll(){
		
		return rest.getForObject(BASE, Product[].class); 
	}
	
	
	@Cacheable(value="product",key="#id")
	public Product getById(int id) {
		return rest.getForObject(BASE + "/" + id, Product.class);
	}
	
	
	@Cacheable("categories")
	public String[] getCategories() {
		return rest.getForObject(BASE + "/categories", String[].class);
	}
	
	
	@Cacheable(value="productByCat",key="#category")
	public Product[]getByCategory(String category){
		
		return rest.getForObject(BASE + "/category/" + category, Product[].class);
	}
	
	

}
