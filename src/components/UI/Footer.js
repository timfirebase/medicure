import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
    return (
        <MDBFooter color="primary" className="font-small pt-0 fixed-bottom">
            <MDBContainer>
                <MDBRow className="pt-5 mb-3 text-center d-flex justify-content-center">
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="#!">About us</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="#!">Products</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="#!">Help</a>
                        </h6>
                    </MDBCol>
                    <MDBCol md="2" className="b-3">
                        <h6 className="title font-weight-bold">
                            <a href="#!">Contact</a>
                        </h6>
                    </MDBCol>
                </MDBRow>
                <hr className="rgba-white-light" style={{ margin: "0 15%" }} />
                <MDBRow className="pb-1">
                    <MDBCol md="12">
                        <div className="mb-5 flex-center">
                            <a className="fb-ic">
                                <i className="fab fa-facebook-f fa-lg white-text mr-md-4"> </i>
                            </a>
                            <a className="tw-ic">
                                <i className="fab fa-twitter fa-lg white-text mr-md-4"> </i>
                            </a>
                            <a className="gplus-ic">
                                <i className="fab fa-google-plus-g fa-lg white-text mr-md-4">

                                </i>
                            </a>
                            <a className="li-ic">
                                <i className="fab fa-linkedin-in fa-lg white-text mr-md-4"> </i>
                            </a>
                            <a className="ins-ic">
                                <i className="fab fa-instagram fa-lg white-text mr-md-4"> </i>
                            </a>
                            <a className="pin-ic">
                                <i className="fab fa-pinterest fa-lg white-text"> </i>
                            </a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-2">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright:
                    <a href="https://www.webvibe.com"> Web Vibe </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;