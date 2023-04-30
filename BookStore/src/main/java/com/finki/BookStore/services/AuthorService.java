package com.finki.BookStore.services;

import com.finki.BookStore.error.NotFoundException;
import com.finki.BookStore.models.dto.AuthorDto;
import com.finki.BookStore.models.entities.Author;
import com.finki.BookStore.models.entities.Country;
import com.finki.BookStore.repositories.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthorService {
    @Autowired
    private AuthorRepository authorRepository;

    public List<Author> getAll() {
        return authorRepository.findAll();
    }

    public List<AuthorDto> getAllAsDto() {
        return getAll().stream().map(AuthorDto::createFromAuthor).collect(Collectors.toList());
    }
    public Author save(Author author) {
        return authorRepository.save(author);
    }

    public Author getById(Long id) {
        return authorRepository.findById(id).orElseThrow(NotFoundException::new);
    }
}
