package com.finki.BookStore.controllers;

import com.finki.BookStore.models.constants.Category;
import com.finki.BookStore.models.dto.BookDto;
import com.finki.BookStore.models.entities.Book;
import com.finki.BookStore.services.AuthorService;
import com.finki.BookStore.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class BookController {
    @Autowired
    private BookService bookService;



    @GetMapping("/books")
    public List<Book> getBooks() {
        return bookService.getAllBooks();
    }
    @PostMapping("/createOrUpdate")
    public Book createOrUpdate(@Valid @RequestBody BookDto bookDto) {
        return bookService.saveOrUpdate(bookDto);
    }

    @DeleteMapping("/deleteBook/{bookId}")
    public Book deleteBook(@PathVariable Long bookId) {
        return bookService.deleteById(bookId);
    }

    @PostMapping("/rentBook/{bookId}")
    public Book rentBook(@PathVariable Long bookId) {
        return bookService.rentBook(bookId);
    }

    @GetMapping("/get/{bookId}")
    public BookDto getBookById(@PathVariable Long bookId) {
        return bookService.getDtoById(bookId);
    }

    @GetMapping("/categories")
    public List<String> getCategories() {
        return Arrays.stream(Category.values()).map(Enum::toString).collect(Collectors.toList());
    }
}
