import React from "react";
import { NavLink } from "react-router-dom";
import "./Styles.css";

function Nav() {
  return (
    <nav>
      <table>
        <tr>
          <NavLink exact activeClassName="active" className="NavLink" to="/">
            About
          </NavLink>
          <NavLink activeClassName="active" className="NavLink" to="/products">
            Products
          </NavLink>
        </tr>
      </table>
    </nav>
  );
}
export default Nav;
