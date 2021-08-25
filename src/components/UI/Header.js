import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../../assets/images/logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top" className="mb-5">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" style={{width:'12%', height:'12%'}} className="rounded-circle"/>
                    <span className="h4 p-3"><b>Medicure</b></span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Contact us</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default Header;