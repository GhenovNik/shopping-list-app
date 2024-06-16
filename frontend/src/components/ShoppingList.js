import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../features/items/itemsSlice';
import ShoppingListItem from './ShoppingListItem';

const ShoppingList = () => {
    const items = useSelector(state => state.items.list);
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeItem(id));
    };

    return (
        <div>
            {items.map(item => (
                <ShoppingListItem key={item.id} item={item} onRemove={handleRemove} />
            ))}
        </div>
    );
};

export default ShoppingList;
