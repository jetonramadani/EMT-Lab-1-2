package com.finki.BookStore.services;

import com.finki.BookStore.error.NotFoundException;
import com.finki.BookStore.models.entities.Country;
import com.finki.BookStore.repositories.CountryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;

@Service
public class CountryService {
    @Autowired
    private CountryRepository countryRepository;

    public List<Country> getAll() {
        return countryRepository.findAll();
    }

    public Country save(Country country) {
        return countryRepository.save(country);
    }

    public Country getById(Long id) {
        return countryRepository.findById(id).orElseThrow(NotFoundException::new);
    }
}
