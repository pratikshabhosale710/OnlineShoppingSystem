package com.example.demo.mysql.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.mysql.model.AddProduct;
import com.example.demo.mysql.repo.AddProductRepo;

@RestController
@CrossOrigin(origins="http://localhost:4200")

public class AddProductController {
	@Autowired
	private AddProductRepo repoAdd;
	@PostMapping("/addproduct")
	public ResponseEntity<AddProduct>addProduct(@RequestBody AddProduct data) {
		
		System.out.println("AddProduct Controller Called");
		return ResponseEntity.ok(repoAdd.save(data));
	}
}
