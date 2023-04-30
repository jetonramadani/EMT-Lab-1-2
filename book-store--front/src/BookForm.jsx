import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    category: yup
        .string()
        .required("Category is required"),
    authorId: yup.number().required("Author is required"),
    availableCopies: yup
        .number()
        .required("Available copies are required")
        .positive("Available copies must be positive")
        .integer("Available copies must be an integer"),
});

// Inline styles for the components
const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '500px',
    margin: '0 auto',
};

const inputGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
};

const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold',
};

const inputStyle = {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
};

const selectStyle = {
    ...inputStyle,
};

const errorStyle = {
    color: 'red',
    fontSize: '14px',
    marginTop: '5px',
};

const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '4px',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
};


const BookForm = ({ initialValues, onSubmit, authors, categories }) => {
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit,
    });

    useEffect(() => {
        // Update the validation schema with the loaded categories
        validationSchema.fields.category = yup
            .string()
            .oneOf(categories || [], "Invalid category")
            .required("Category is required");
    }, [categories]);

    return (
        <form onSubmit={formik.handleSubmit} style={formStyle}>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    style={inputStyle}
                />
                {formik.errors.name && formik.touched.name && (
                    <div style={errorStyle}>{formik.errors.name}</div>
                )}
            </div>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Category</label>
                <select
                    name="category"
                    value={formik.values.category}
                    onChange={formik.handleChange}
                    style={selectStyle}
                >
                    <option value="">Select a category</option>
                    {categories?.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
                {formik.errors.category && formik.touched.category && (
                    <div style={errorStyle}>{formik.errors.category}</div>
                )}
            </div>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Author</label>
                <select
                    name="authorId"
                    value={formik.values.authorId}
                    onChange={formik.handleChange}
                    style={selectStyle}
                >
                    <option value="">Select an author</option>
                    {authors?.map((author) => (
                        <option key={author.id} value={author.id}>
                            {author.name}
                        </option>
                    ))}
                </select>
                {formik.errors.authorId && formik.touched.authorId && (
                    <div style={errorStyle}>{formik.errors.authorId}</div>
                )}
            </div>
            <div style={inputGroupStyle}>
                <label style={labelStyle}>Available Copies</label>
                <input
                    type="number"
                    name="availableCopies"
                    value={formik.values.availableCopies}
                    onChange={formik.handleChange}
                    style={inputStyle}
                />
                {formik.errors.availableCopies && formik.touched.availableCopies && (
                    <div style={errorStyle}>{formik.errors.availableCopies}</div>
                )}
            </div>
            <button type="submit" style={buttonStyle}>Submit</button>
        </form>
    );
};

export default BookForm;
