package com.finki.BookStore;

import com.finki.BookStore.models.entities.Author;
import com.finki.BookStore.models.entities.Country;
import com.finki.BookStore.services.AuthorService;
import com.finki.BookStore.services.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class Bootstrap {

    @Autowired
    private AuthorService authorService;

    @Autowired
    private CountryService countryService;

    @PostConstruct
    public void init() {
        if (countryService.getAll().isEmpty()) {
            // TODO CREATE SOME
            countryService.save(
                    Country.builder()
                            .id(1L)
                            .name("Macedonia")
                            .continent("Europe")
                    .build()
            );
            countryService.save(
                    Country.builder()
                            .id(2L)
                            .name("Albania")
                            .continent("Europe")
                            .build()
            );
        }

        if (authorService.getAll().isEmpty()) {
            // TODO CREATE SOME
            authorService.save(
                    Author.builder()
                            .id(1L)
                            .name("Jeton")
                            .surname("Ramadani")
                            .country(countryService.getById(1L))
                            .build());
            authorService.save(
                    Author.builder()
                            .id(2L)
                            .name("Test")
                            .surname("Avtor")
                            .country(countryService.getById(2L))
                            .build());
        }
    }
}
