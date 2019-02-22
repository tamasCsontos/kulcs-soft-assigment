package com.example.kulcssoft.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.example.kulcssoft.model.User;
import com.example.kulcssoft.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	UserRepository repository;

	@GetMapping("/users")
	public List<User> getAllUsers() {
		System.out.println("Get all Users...");

		List<User> users = new ArrayList<>();
		repository.findAll().forEach(users::add);

		return users;
	}

	@PostMapping(value = "/users/create")
	public User postCustomer(@RequestBody User user) {

		User _user = repository.save(new User(user.getName(), user.getEmail()));
		return _user;
	}

	@DeleteMapping("/users/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable("id") long id) {
		System.out.println("Delete User with ID = " + id + "...");

		repository.deleteById(id);

		return new ResponseEntity<>("User has been deleted!", HttpStatus.OK);
	}

	@DeleteMapping("/users/delete")
	public ResponseEntity<String> deleteAllUsers() {
		System.out.println("Delete All Users...");

		repository.deleteAll();

		return new ResponseEntity<>("All users have been deleted!", HttpStatus.OK);
	}

	@GetMapping(value = "users/{id}")
	public Optional<User> findById(@PathVariable int id) {

		Optional<User> user = repository.findById((long) id);
		return user;
	}

}
