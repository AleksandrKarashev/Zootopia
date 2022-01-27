import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Footer = () => {

   return (
      <Navbar style={{ backgroundColor: "#00CF81" }}>
         <Container fluid>
            <Nav className="me-auto">
               <Nav.Link href="#">Developer: Aleksandr Karashev</Nav.Link>
            </Nav>
         </Container>
      </Navbar>
   )
}

export default Footer;