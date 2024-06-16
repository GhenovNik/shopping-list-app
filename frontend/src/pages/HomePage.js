import React from 'react';
import { Container, Typography } from '@mui/material';
import ShoppingList from "../components/ShoppingList";
import AddItemForm from "../components/AddItemForm";

const HomePage = () => {
    return (
        <Container>
            <Typography variant="h2" component="h1" gutterBottom>
                Shopping List
            </Typography>
            <AddItemForm />
            <ShoppingList />
        </Container>
    );
};

export default HomePage;
