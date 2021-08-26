import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

const Footer = () => {
    return (
        <Navbar expand="lg" bg="primary" variant="dark" className="fixed-bottom">
            <Container className="justify-content-center">
                    <Nav>
                        <Nav.Link href="#deets">Copyright 2021</Nav.Link>
                    </Nav>
            </Container>
        </Navbar>
    );
}

export default Footer;