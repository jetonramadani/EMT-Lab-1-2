import React, { useEffect, useState } from "react";

import BookService from "./BookService";
import BookForm from "./BookForm";
import { useHistory, useParams } from "react-router-dom";
import OtherService from "./OtherService";
import DefaultLayout from "./DefaultLayout";

// ... Validation schema and BookForm component ...

const BookFormContainer = () => {

    const { getAuthors, getCategories } = OtherService();

    const [initialState, setInitialState] = useState(null);
    const [authors, setAuthors] = useState([]);
    const [categories, setCategories] = useState([]);
    const { getById, createOrUpdateBook } = BookService();

    const { bookId } = useParams();

    const history = useHistory();


    const onSubmit = async (values) => {
        await createOrUpdateBook(values);
        history.push("/books");
    }

    useEffect(() => {
        // Fetch the initial state from your backend service
        // Replace the following function with your API call
        const fetchBook = async (id) => {


            try {
                const response = await getById(id);
                setInitialState(response);
            } catch (e) {
                alert(e);
                history.push("/books");
            }
        };

        const fetchAuthors = async () => {
            const response = await getAuthors();
            setAuthors(response);
        }

        const fetchCategories = async () => {
            const response = await getCategories();
            setCategories(response);
        }
        if (bookId && bookId !== "0") {
            fetchBook(bookId);

        } else {
            setInitialState({
                id: "",
                name: "",
                category: "",
                authorId: "",
                availableCopies: "",
            });
        }

        fetchAuthors();
        fetchCategories();
    }, [bookId]);

    if (!initialState) {
        return <div>Loading...</div>;
    }

    return (
        <DefaultLayout>
            <BookForm
                initialValues={initialState}
                onSubmit={onSubmit}
                authors={authors}
                categories={categories}
            />
        </DefaultLayout>
    );
};

export default BookFormContainer;
