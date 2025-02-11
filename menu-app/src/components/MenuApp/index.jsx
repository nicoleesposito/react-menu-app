import React from 'react';
import Menu from '../Menu';

// MenuApp component that would recieve the prop 'data'
const MenuApp = ({ data }) => {
    return (
        <div className="App">
            {/* Loop through data array that contains multiple menus */}
            {data.map((menu, index) => (
                <Menu key={index} menuName={menu.menuName} menuItems={menu.menuItems} />
            ))}
        </div>
    );
};

// export the component to other files
export default MenuApp;
