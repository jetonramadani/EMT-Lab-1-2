import axios from "axios";

const axiosClient = () => {
    const apiClient = axios.create({
        baseURL: process.env.REACT_APP_JSON_MOCK_URL,
    });

    apiClient.interceptors.request.use(
        async (config) => {

            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    apiClient.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            if (error.response?.status === 401) {
                console.log("json", error.toJSON());
                return Promise.reject(error.message);
            }
            if (error.response && error.response.data) {
                if (error.response.data.errors) {
                    return Promise.reject(error.response.data.errors);
                }
                if (error.response.data.message) {
                    return Promise.reject(error.response.data.message);
                }
                return Promise.reject(error.response.data);
            }
            return Promise.reject(error.message);
        }
    );

    return apiClient;
};

export default axiosClient;
