import React from 'react'
import { Navbar, Container, NavDropdown, Nav, Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/nav.css'
import { Badge } from "@material-ui/core";
import {  ShoppingCartOutlined } from "@material-ui/icons";

const navbar = () => {
    return (
        <div className="nav-bg" >
         <container >
         <Navbar  expand="lg">
           <div className="logo" >
         <img src="/logo.png"/>
         </div>
         <div className="about"> About </div>
         <div class="dropdown">
  <button class="dropbtn">Categories</button>
  <div class="dropdown-content">
    <a href="/categories">Office Essentials</a>
    <a href="#">School Essentials</a>
    <a href="#">Notebooks and Diaries</a>
  </div>
</div>
<div className="contact">Contact </div>
<div className="cart">
<Badge badgeContent={0} color="primary">
              <ShoppingCartOutlined />
            </Badge>
        </div>
       </Navbar>
         </container>
        </div>
    )
}

export default navbar
