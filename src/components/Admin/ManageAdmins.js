import React, {useEffect, useState} from "react"
import {Form, Card, Button, Container, Row, Modal} from 'react-bootstrap'
import {connect} from "react-redux";
import * as authActions from '../../store/actions/AuthActions';
import Swal from "sweetalert2";
import ViewAdmins from "./ViewAdmins";
import UploadImage from "../UI/UploadImage/UploadImage";
import * as AdminActions from "../../store/actions/AdminActions";
import {useFormik} from "formik";
import * as Yup from "yup";

const ManageAdmins = (props) => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [name,setName] = useState();
    const [phone,setPhone] = useState();
    const [img,setImg] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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

    useEffect(() => {
        if(props.isRegistered){
            Swal.fire('Admin registered!','','success');
            props.clearRegisteredStatus();
        }
    },[props.isRegistered]);

    useEffect(()=> {
        if(props.isNotRegistered){
            Swal.close();
            Swal.fire(props.error.message,'','error');
            props.clearIsNotRegisteredStatus();
        }
    },[props.isNotRegistered])

    useEffect(()=>{
        if(props.isUserRemoved) {
            Swal.close();
            props.clearUserRemovedStatus();
            Swal.fire('Admin Deleted!','','success');
        }
    },[props.isUserRemoved]);

    const setProfileImg = (img) => {
        setImg(img);
    }

    let initValues = {
        email: '',
        password: '',
        name: '',
        phone: '',
        img: null
    }

    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: '',
            phone: '',
            img: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().max(50, 'Email must be shorter than 50 characters').required().email(),
            password: Yup.string().min(6, 'Password should be longer than 6 characters').required(),
            name: Yup.string().required().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
            phone: Yup.number().required()
        }),
        onSubmit: ({email, password, name, phone}) => {
            const admin = {
                name: name,
                email: email,
                password: password,
                phone: phone,
                role: "admin",
                img: img
            };
            Swal.fire({
                title: 'Please wait...',
                html: '',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            });
            props.onAddAdmin(admin);
            handleClose();
        }
    });

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
                                    <Form autoComplete="off" onSubmit={handleSubmit}>
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text"
                                                          value={values.name}
                                                          onChange={handleChange}
                                                          onBlur={handleBlur}
                                                          id="name"
                                                          className={touched.name && errors.name && "border-danger"}/>
                                                        {touched.name && errors.name ? (
                                                            <div className="text-danger h6 pt-2 pb-2">{errors.name}</div>
                                                        ): null}
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email"
                                                          value={values.email}
                                                          onChange={handleChange}
                                                          onBlur={handleBlur}
                                                          id="email"
                                                          className={touched.email && errors.email && "border-danger"}/>
                                                        {touched.email && errors.email ? (
                                                             <div className="text-danger h6 pt-2 pb-2">{errors.email}</div>
                                                        ): null}
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password"
                                                          value={values.password}
                                                          onChange={handleChange}
                                                          onBlur={handleBlur}
                                                          id="password"
                                                          className={touched.password && errors.password && "border-danger"}/>
                                                        {touched.password && errors.password ? (
                                                            <div className="text-danger h6 pt-2 pb-2">{errors.password}</div>
                                                        ): null}
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Contact No.</Form.Label>
                                            <Form.Control type="number"
                                                          value={values.phone}
                                                          onChange={handleChange}
                                                          onBlur={handleBlur}
                                                          id="phone"
                                                          className={touched.phone && errors.phone && "border-danger"}/>
                                            {touched.phone && errors.phone ? (
                                                <div className="text-danger h6 pt-2 pb-2">{errors.phone}</div>
                                            ): null}
                                        </Form.Group>
                                        <Button className="w-100 mt-4 btn-md" type={"submit"}>
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
        isUserRemoved: state.adminRdcr.isUserRemoved,
        admins: state.adminRdcr.admins,
        gotAdmins: state.adminRdcr.gotAdmins,
        isNotRegistered: state.authRdcr.isNotRegistered,
        error: state.authRdcr.error,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddAdmin: (admin) => dispatch(authActions.registerInit(admin,"admin")),
        onDeleteAdmin: (admin) => dispatch(authActions.removeUserInit(admin,"admin")),
        getAllAdmins: () => dispatch(AdminActions.getAdminInit()),
        clearRegisteredStatus: () => dispatch(authActions.clearRegisteredStatus()),
        clearUserRemovedStatus: () => dispatch(AdminActions.clearUserRemovedStatus()),
        clearIsNotRegisteredStatus:() => dispatch(authActions.clearIsNotRegisteredStatus())
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(ManageAdmins);