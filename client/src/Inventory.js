import React, { useState, useEffect } from 'react';
import { getInventory, updateInventory } from './api';

const Inventory = () => {
    const [inventory, setInventory] = useState([]);
    const [itemId, setItemId] = useState('');
    const [quantity, setQuantity] = useState('');

    useEffect(() => {
        getInventory().then(data => setInventory(data));
    }, []);

    const handleUpdate = () => {
        updateInventory(itemId, quantity).then(() => {
            getInventory().then(data => setInventory(data));
        });
    };

    return (
        <div>
            <h1>Inventory</h1>
            <ul>
                {inventory.map(item => (
                    <li key={item.item_id}>{item.item_name}: {item.quantity}</li>
                ))}
            </ul>
            <h2>Update Inventory</h2>
            <input type="text" placeholder="Item ID" value={itemId} onChange={e => setItemId(e.target.value)} />
            <input type="text" placeholder="Quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
            <button onClick={handleUpdate}>Update</button>
        </div>
    );
};

export default Inventory;