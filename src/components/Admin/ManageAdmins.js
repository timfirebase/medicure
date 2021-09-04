import React, {useEffect, useState} from "react"
import {Form, Card, Button, Container, Row, Modal} from 'react-bootstrap'
import {connect} from "react-redux";
import * as authActions from '../../store/actions/AuthActions';
import Swal from "sweetalert2";
import ViewAdmins from "./ViewAdmins";
import UploadImage from "../UI/UploadImage/UploadImage";

const ManageAdmins = (props) => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const [img,setImg] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const admin = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        role: "admin",
        img: img
    };

    useEffect(() => {
        props.clearRegisteredStatus();
        props.getAllAdmins();
    },[]);

    const clearFormField = () => {
        setEmail('');
        setPassword('');
        setName('');
        setPhone('');
    }

    const onDeleteClick = (id) => {
        const filteredAdmin = props.admins.filter(adm => adm.id === id)[0];
        Swal.fire({
            title: 'Please wait...',
            html: '',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        })
        props.onDeleteAdmin(filteredAdmin);
    }

    if(props.isRegistered){
        Swal.fire('Admin registered!','','success');
        props.clearRegisteredStatus();
    }

    if(props.isUserRemoved) {
        Swal.close();
        props.clearUserRemovedStatus();
        Swal.fire('Admin Deleted!','','success');
    }

    const setProfileImg = (img) => {
        setImg(img);
    }

    return(
        <>
            <ViewAdmins heading="Manage Admins" admins={props.admins} onDeleteClick={onDeleteClick}/>
            <Container className= "w-50">
                <Row className={"d-flex justify-content-center pt-3 pb-3"}>
                    <Button variant="primary" onClick={handleShow}>
                        Add an Admin
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header className="d-flex justify-content-center">
                            <Modal.Title>Add Admin</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Card className={"w-100"}>
                                <Card.Body>
                                    <div className="container">
                                        <UploadImage setProfileImg={setProfileImg}/>
                                    </div>
                                    <Form autoComplete="off">
                                        <Form.Group id="name">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" required value={name} onChange={(event)=>{event.stopPropagation();setName(event.target.value)}}/>
                                        </Form.Group>
                                        <Form.Group id="email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" required value={email} onChange={(event)=>{setEmail(event.target.value)}}/>
                                        </Form.Group>
                                        <Form.Group id="password">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password"  required value={password} onChange={(event)=>{setPassword(event.target.value)}}/>
                                        </Form.Group>
                                        <Form.Group id="phone">
                                            <Form.Label>Contact No.</Form.Label>
                                            <Form.Control type="number" required value={phone} onChange={(event)=>{setPhone(event.target.value)}}/>
                                        </Form.Group>
                                        <Button className="w-100 mt-4 btn-md" type={"submit"}
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    Swal.fire({
                                                        title: 'Please wait...',
                                                        html: '',
                                                        allowEscapeKey: false,
                                                        allowOutsideClick: false,
                                                        didOpen: () => {
                                                            Swal.showLoading()
                                                        }
                                                    })
                                                    props.onAddAdmin(admin);
                                                    clearFormField();
                                                    handleClose();
                                                }}>
                                            Add
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={handleClose}>
                                Cancel
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isRegistered: state.authRdcr.isRegistered,
        isUserRemoved: state.authRdcr.isUserRemoved,
        admins: state.authRdcr.admins,
        gotAdmins: state.authRdcr.gotAdmins
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddAdmin: (admin) => dispatch(authActions.registerInit(admin)),
        onDeleteAdmin: (admin) => dispatch(authActions.removeAdminInit(admin)),
        getAllAdmins: () => dispatch(authActions.getAdminInit()),
        clearRegisteredStatus: () => dispatch(authActions.clearRegisteredStatus()),
        clearUserRemovedStatus: () => dispatch(authActions.clearUserRemovedStatus())
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(ManageAdmins);