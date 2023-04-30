import React, { useState, useEffect } from "react";
import DefaultLayout from "./DefaultLayout";
import OtherService from "./OtherService";

const CategoriesPage = () => {
    const [categories, setCategories] = useState([]);
    const { getCategories } = OtherService();
    const fetchCategories = async () => {
        const response = await getCategories();
        setCategories(response);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    // Inline styles for the components
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
    };

    const titleStyle = {
        fontSize: "24px",
        fontWeight: "bold",
        marginBottom: "20px",
    };

    const listStyle = {
        listStyleType: "none",
        padding: 0,
    };

    const listItemStyle = {
        marginBottom: "5px",
        fontSize: "18px",
    };

    return (
        <DefaultLayout>
            <div style={containerStyle}>
                <h2 style={titleStyle}>Categories</h2>
                <ul style={listStyle}>
                    {categories.map((category, index) => (
                        <li key={index} style={listItemStyle}>
                            {category}
                        </li>
                    ))}
                </ul>
            </div>
        </DefaultLayout>
    );
};

export default CategoriesPage;
