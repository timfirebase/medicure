import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

const Footer = () => {
    return (
        <div className="container pt-5">
            <Navbar expand="lg" bg="primary" variant="dark" className="fixed-bottom mt-5">
                <Container className="justify-content-center">
                        <Nav>
                            <Nav.Link href="#deets">Copyright 2021</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Footer;