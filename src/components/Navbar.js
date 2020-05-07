import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <Nav md={{ vertical: true }} className="text-md-center">
            <NavItem>
                <NavLink exact to="/">HOME</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/weather">WEATHER</NavLink>
            </NavItem>
            <NavItem>
                <NavLink to="/asdasdad">Try 404's</NavLink>
            </NavItem>
        </Nav>
    );
}

export default Navbar;
