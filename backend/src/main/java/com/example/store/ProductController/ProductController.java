package com.example.store.ProductController;

import com.example.store.model.Product;
import com.example.store.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {
	
	
	@Autowired 
	private ProductService service;
	
	@GetMapping public Product[] all() {
		return service.getAll();
	}
	
	  @GetMapping("/{id}")
	public Product one(@PathVariable int id) {
		return service.getById(id);
	}
	
	
	@GetMapping("/categories")
	public String[] categories() {
		return service.getCategories();
	}
	
	
	@GetMapping("/category/{cat}")
	public Product[] byCategory(@PathVariable String cat) {
		
		return service.getByCategory(cat);
	}

}
