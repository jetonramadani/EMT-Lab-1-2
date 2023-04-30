package com.finki.BookStore.controllers;

import com.finki.BookStore.models.dto.AuthorDto;
import com.finki.BookStore.models.entities.Book;
import com.finki.BookStore.services.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AuthorController {
    @Autowired
    private AuthorService authorService;


    @GetMapping("/authors")
    public List<AuthorDto> getBooks() {
        return authorService.getAllAsDto();
    }
}
