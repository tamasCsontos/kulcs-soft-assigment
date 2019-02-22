package com.example.kulcssoft.repo;


import com.example.kulcssoft.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.web.bind.annotation.CrossOrigin;



@CrossOrigin(origins = "http://localhost:4200")
public interface UserRepository extends CrudRepository<User, Long> {
}
