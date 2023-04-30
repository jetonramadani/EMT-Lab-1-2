package com.finki.BookStore.models.dto;

import com.finki.BookStore.error.ValueOfEnum;
import com.finki.BookStore.models.constants.Category;
import com.finki.BookStore.models.entities.Author;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BookDto {
    private Long id;

    @NotBlank
    @NotNull
    private String name;

    @NotNull(message = "You need to specify the category")
    @ValueOfEnum(enumClass = Category.class, typeOfEnum = "Category")
    private String category;

    @NotNull
    private Long authorId;

    @NotNull
    private Integer availableCopies;
}
