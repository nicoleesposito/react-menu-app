import React from 'react';
import MenuItem from '../MenuItem';

// Menu component that takes in the title of the menu and the list of items.
const Menu = ({ menuName, menuItems }) => {
    return (
        <div className="menu">
            <h1>{menuName} Menu</h1>
            <div className="menuItems">
                {/* Loop through menuItems array and create a MenuItem for each */}
                {menuItems.map(item => (
                    <MenuItem
                        key={item.itemId}
                        itemId={item.itemId}
                        itemPrice={item.itemPrice}
                        itemName={item.itemName}
                        itemDescription={item.itemDescription}
                    />
                ))}
            </div>
        </div>
    );
};

// export the component to other files
export default Menu;
