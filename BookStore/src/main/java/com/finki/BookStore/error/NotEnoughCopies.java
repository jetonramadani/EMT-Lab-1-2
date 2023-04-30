package com.finki.BookStore.error;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseBody
@ResponseStatus(HttpStatus.BAD_REQUEST)
public class NotEnoughCopies extends RuntimeException{
    public NotEnoughCopies() {
        super("There isn't enough copies for this book!");
    }
}
