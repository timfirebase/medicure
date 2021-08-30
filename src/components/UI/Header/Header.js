import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../../../assets/images/logo.png';
import {connect} from "react-redux";
import logout from '../../../assets/images/logout.png';
import * as authActions from "../../../store/actions/AuthActions";
import {useHistory} from "react-router-dom";
import React from "react";

const Header = (props) => {
    const history = useHistory();
    if(!props.user) {
        history.push('/');
    }
    const onNavClick = (path) => {
        history.push(path);
    }

    const onBrandClick = (user) => {
        if(user) {
            if("patient" === user.role) {
                history.push("/patientHome");
            }
            else if ("admin" === user.role){
                history.push("/adminHome");
            }
        } else {
            history.push('/');
        }
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" sticky="top" className="mb-5">
            <Container>
                <Navbar.Brand href="#" className="align-items-center" onClick={() => onBrandClick(props.user)}>
                    <img src={logo} alt="logo" style={{width:'12%', height:'12%'}} className="rounded-circle"/>
                    <span className="h4 p-3"><b>Medicure</b></span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    {
                        props.tiles ? (
                            <Nav className="align-items-center">
                                {
                                    props.tiles.map(tile => (
                                        <Nav.Link onClick={() => onNavClick(tile.path)} href="#" key={tile.path}> <span className="text-white">{tile.heading}  |</span></Nav.Link>
                                    ))
                                }
                            </Nav>
                        ) : ''
                    }

                    {
                        props.user ? (
                        <Nav className="align-items-center">
                            <Nav.Link><span className="text-white h5">{props.user.name} ({props.user.role})</span></Nav.Link>
                            <Nav.Link onClick={props.onLogout} href="#">
                                <img src={logout} alt={"logout"} className="img-fluid" style={{width:'80%', height:'40%'}}/>
                            </Nav.Link>
                        </Nav>
                        ) :''
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

const mapStateToProps = state => {
    return {
        user: state.authRdcr.user
    }
};


const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(authActions.logoutInit())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Header);