import React from 'react';

// the MenuItem component represents a menu item in the list and takes in 4 properties (props).
const MenuItem = ({ itemId, itemPrice, itemName, itemDescription }) => {
    return (
        // div is returned to show the details for a menu item.
        // class name and id given to organize the menu items using template literal
        <div className="menu-item" id={`menu-item-${itemId}`}>
            <span>${itemPrice}</span>
            <h2>{itemName}</h2>
            <p>{itemDescription}</p>
            <button>Add to Cart</button>
        </div>
    );
};

// export the component to other files
export default MenuItem;
