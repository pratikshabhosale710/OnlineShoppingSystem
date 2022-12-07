package com.example.demo.mysql.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.mysql.model.User;

@Repository
public interface UserRepo extends JpaRepository<User,String>{

}
