import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Film} from "react-feather";
import "./header.css";
import { Link } from "react-router-dom";
function Header(){
   return (
    <Navbar fixed="top" expand="lg" className="bg1">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link>
              <Link to={"/website"} id="main"><Film/> Home</Link> 
            </Nav.Link>
            <Nav.Link href="#action2">IMDB+</Nav.Link>
            <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link to={"/TvShow"}>TV Shows</Link>  
              </NavDropdown.Item>
              <NavDropdown.Item >
                <Link to={"/mostwatched"}>Most Watched</Link>
              </NavDropdown.Item>
            </NavDropdown>  
          </Nav>
          <Nav className="mx-auto my-2 my-lg-0">
              <Nav.Link>Contact</Nav.Link>
          </Nav>

            

            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;