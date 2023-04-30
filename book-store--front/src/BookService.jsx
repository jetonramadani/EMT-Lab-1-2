import axiosClient from "./axiosConfig";

const BookService = () => {
    const apiClient = axiosClient();

    const getBooks = async () => {
        const response = await apiClient.get(`/books`);
        return response.data;
    };

    const deleteBook = async (bookId) => {
        const response = await apiClient.delete(`/deleteBook/${bookId}`);
        return response.data;
    }

    const rentBook = async (bookId) => {
        const response = await apiClient.post(`/rentBook/${bookId}`);
        return response.data;
    }

    const getById = async (bookId) => {
        const response = await apiClient.get(`/get/${bookId}`);
        return response.data;
    }

    const createOrUpdateBook = async (book) => {
        const response = await apiClient.post(`/createOrUpdate`, book);
        return response.data;
    }

    return {
        getBooks,
        deleteBook,
        rentBook,
        getById,
        createOrUpdateBook
    };
};

export default BookService;
