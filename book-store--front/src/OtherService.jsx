import axiosClient from "./axiosConfig";

const OtherService = () => {
    const apiClient = axiosClient();

    const getAuthors = async () => {
        const response = await apiClient.get(`/authors`);
        return response.data;
    };


    const getCategories = async () => {
        const response = await apiClient.get(`/categories`);
        return response.data;
    }

    return {
        getAuthors,
        getCategories
    };
};

export default OtherService;
