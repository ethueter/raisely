import React, {useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleItemClick = (e, { name }) => setActiveLink();

    const { activeItem } = activeLink;
    
    return (
        <Menu>
            <Menu.Item
                as={Link}
                to="/"
                name="home"
                active={activeItem === 'home'}
                onClick={handleItemClick}
                >
                Home
            </Menu.Item>
            <Menu.Item
                as={Link}
                to="/"
                name="about"
                active={activeItem === 'about'}
                onClick={handleItemClick}
            >
                About
            </Menu.Item>
        </Menu>
    )
};

export default Navbar;