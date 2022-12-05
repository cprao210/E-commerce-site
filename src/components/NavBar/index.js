import {
  FavoriteBorderOutlined,
  PersonOutlineOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <Link to="/">E-Commerce Store</Link>
        </div>
        <div className="right">
          <div className="center">Home</div>
          <div className="center">About</div>
          <div className="center">Contect Us</div>
          <div className="center">Stores</div>
          <div className="icons">
            <Search />
            <PersonOutlineOutlined />
            <FavoriteBorderOutlined />
            <div className="cartIcon">
              <ShoppingCartOutlined />
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
