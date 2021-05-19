import React from "react";

const Navbar = ({items}) => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>{items.title}</div>
    </header>
);

export default Navbar;