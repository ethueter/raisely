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
          active={activeLink === "home"}
          onClick={handleClick}
        >
          Home
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/answers"
          name="about"
          active={activeLink === "answers"}
          onClick={handleClick}
        >
          Q & A
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/tasks"
          name="tasks"
          active={activeLink === "tasks"}
          onClick={handleClick}
        >
          Tasks
        </Menu.Item>
        <Menu.Item
            as={Link}
            to="/about"
            name="about"
            active={activeLink === "about"}
            onClick={handleClick}
            position="right"
        >
            About
        </Menu.Item>
      </Menu>
    );
};

export default Navbar;