import { NavLink } from "react-router-dom";
import React from "react";
import "../styles/header.css";

export default function Header() {
  const logo = "./assets/logo.png";
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand logo_link" to="/">
            <img
              alt="logo"
              src="https://www.pngmart.com/files/12/Funny-Donkey-PNG-Transparent-Image.png"
              className="logo"
            />
          </NavLink>
          <div className="pages_links">
            <NavLink className="nav-link link" to="/discoveries">
              Découvertes
            </NavLink>
          </div>
          <div className="pages_links login_link">
            <NavLink className="nav-link link" to="/login">
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
