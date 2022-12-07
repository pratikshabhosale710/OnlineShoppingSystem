package com.example.demo.mysql.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.mysql.model.AddProduct;



public interface AddProductRepo extends JpaRepository<AddProduct,String> {

}
