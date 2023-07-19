import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/login" activeStyle>
            Login
          </NavLink>
          <NavLink to="/signup" activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </div>
  );
};

export default Navbar;
