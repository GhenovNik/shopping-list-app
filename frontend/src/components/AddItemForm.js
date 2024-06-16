import React from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addItem } from '../features/items/itemsSlice';
import { TextField, Button } from '@mui/material';

const AddItemForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
        }),
        onSubmit: (values, { resetForm }) => {
            dispatch(addItem({ id: Date.now(), name: values.name }));
            resetForm();
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                label="Item Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
            />
            <Button variant="contained" color="primary" type="submit">
                Add Item
            </Button>
        </form>
    );
};

export default AddItemForm;
