package com.example.kulcssoft.repo;


import com.example.kulcssoft.model.User;
import org.springframework.data.repository.CrudRepository;


public interface UserRepository extends CrudRepository<User, Long> {
	User findById(int id);
}
