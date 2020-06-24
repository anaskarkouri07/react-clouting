import React from "react";
import "./header.style.scss";
import logo from "./logo.png";
import { auth } from "../../firebase/firebase.utils";
import { Link } from "react-router-dom";

const Header = ({ isSignIn }) => (
  <nav className="nav">
    <div className="nav-logo">
      <Link to="/">
        {" "}
        <img src={logo} alt="Commerce Logo" />{" "}
      </Link>
    </div>
    <ul className="nav-list">
      <li className="nav-item">
        <Link className="nav-link" to="/shop">
          Shop
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
      <li className="nav-item">
        {isSignIn ? (
          <button
            className="nav-link"
            onClick={(e) => {
              auth.signOut();
            }}>
            Sign Out
          </button>
        ) : (
          <Link className="nav-link" to="/signin">
            Sign in
          </Link>
        )}
      </li>
      <li className="nav-item"></li>
    </ul>
  </nav>
);

export default Header;
