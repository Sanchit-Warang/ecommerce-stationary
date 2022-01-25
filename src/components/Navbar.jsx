import React from 'react'
import { Navbar, Container, NavDropdown, Nav, Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/nav.css'
import { Badge } from "@material-ui/core";
import {  ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from 'react-router-dom';

const navbar = ({ totalItemsCart }) => {
    return (
        <div className="nav-bg" >
         <container >
         <Navbar  expand="lg">
           <a className="logo" >
           <Link to='/'>
         <img src="/logo.png"/>
         </Link>
         </a>
         <Link to='/aboutus'>
         <div className="about"> About </div>
         </Link>
         <div class="dropdown">
  <button class="dropbtn">Categories</button>
  <div class="dropdown-content">
    <a href="/office">Office Essentials</a>
    <a href="/school">School Essentials</a>
    <a href="/notebookAndDiaries">Notebooks and Diaries</a>
  </div>
</div>
<div className="contact">Contact </div>
<div className="cart">
<Link to='/cart'>
<Badge badgeContent={totalItemsCart} color="primary">
              <ShoppingCartOutlined />
            </Badge>
            </Link>
        </div>
       </Navbar>
         </container>
        </div>
    )
}

export default navbar
