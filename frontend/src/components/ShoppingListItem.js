import React from 'react';
import { ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ShoppingListItem = ({ item, onRemove }) => {
    return (
        <ListItem>
            <ListItemText primary={item.name} />
            <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => onRemove(item.id)}>
                    <DeleteIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default ShoppingListItem;
