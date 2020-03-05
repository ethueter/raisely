import React, {useState } from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleClick = (e, {name}) => setActiveLink(name)
    
    return (
        <Menu>
            <Menu.Item
                as={Link}
                to="/"
                name="home"
                active={activeLink === 'home'}
                onClick={handleClick}
                >
                Home
            </Menu.Item>
            <Menu.Item
                as={Link}
                to="/about"
                name="about"
                active={activeLink === 'about'}
                onClick={handleClick}
            >
                About
            </Menu.Item>
        </Menu>
    )
};

export default Navbar;