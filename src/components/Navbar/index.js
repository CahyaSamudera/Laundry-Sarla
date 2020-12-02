import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Laundry Sarla</NavLink>
        <NavIcon onClick={toggle}>
          {/* <p>Layanan</p> */}
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
