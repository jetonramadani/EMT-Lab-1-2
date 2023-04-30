import React, { useEffect, useState } from 'react'
import BookService from './BookService';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton,
} from '@material-ui/core';
import { Edit, Delete, Check } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import DefaultLayout from './DefaultLayout';

const BooksPage = () => {
    const { getBooks, deleteBook, rentBook } = BookService();
    const [books, setBooks] = useState([]);

    const history = useHistory();

    useEffect(() => {
        const effect = async () => {
            try {
                const response = await getBooks();
                setBooks(response);

            } catch (error) {
                console.log("error", error);
            }

        }

        effect();

        return () => {

        }
    }, [])
    const handleEdit = (bookId) => {
        console.log('Edit book with id:', bookId);
        history.push(`/books/${bookId}`);
        // Add edit functionality here
    };

    const handleDelete = async (bookId) => {
        console.log('Delete book with id:', bookId);
        try {
            await deleteBook(bookId);
            setBooks(prev => prev.filter(book => book.id !== bookId))
        } catch (error) {
            console.log("error", error);
        }
        // Add delete functionality here
    };

    const handleRent = async (bookId) => {
        console.log('Rent book with id:', bookId);
        try {
            await rentBook(bookId);
            setBooks(prev => prev.map(book => {
                if (book.id === bookId && book.availableCopies > 0) {
                    return {
                        ...book,
                        availableCopies: book.availableCopies - 1
                    };
                } else {
                    return book;
                }
            }))
        } catch (error) {
            console.log("error", error);
            alert(error);
        }
        // Add delete functionality here
    };
    return (
        <DefaultLayout>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Book Name</TableCell>
                            <TableCell>Author Name</TableCell>
                            <TableCell>Author Surname</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Available Copies</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((book) => (
                            <TableRow key={book.id}>
                                <TableCell>{book.name}</TableCell>
                                <TableCell>{book.author.name}</TableCell>
                                <TableCell>{book.author.surname}</TableCell>
                                <TableCell>{book.category}</TableCell>
                                <TableCell>{book.availableCopies}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => handleEdit(book.id)}>
                                        <Edit />
                                    </IconButton>
                                    <IconButton onClick={() => handleDelete(book.id)}>
                                        <Delete />
                                    </IconButton>
                                    <IconButton onClick={() => handleRent(book.id)}>
                                        <Check />
                                    </IconButton>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </DefaultLayout>
    )
}

export default BooksPage;