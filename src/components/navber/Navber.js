import React from 'react';
import './navber.css'
import image from '../../images/logo2.png'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import { HashLink } from 'react-router-hash-link';



const navber = () => {
 const {users,logOut} = UseAuth();
    return (
        <>
             <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
      <Navbar.Brand href="#home">Island Hopper</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Nav.Link as = {HashLink} to ="/home#home">Home</Nav.Link>
      <Nav.Link as = {HashLink} to ="/home#about">About</Nav.Link>
      <Nav.Link as = {HashLink} to ="/home#service">Services</Nav.Link>
      <Nav.Link as = {HashLink} to ="/home#team">Team</Nav.Link>
      {
        users?.email?
       <>
        <Button onClick = {logOut} variant="light">LogOut</Button>
        <Nav.Link as = {Link} to ="/addService">Add Service</Nav.Link>
        <Nav.Link as = {Link} to ="/manageServices">Manage Service</Nav.Link>
       </>:
        <Nav.Link as = {Link} to ="/login">LogIn</Nav.Link>
      }
      <Navbar.Text>
        Signed in as: <a href="#login">{users?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        </>
    );
};

export default navber;