import React, {useEffect, useState} from "react";
import ViewDoctors from "./ViewDoctors";
import Swal from "sweetalert2";
import {connect} from "react-redux";
import "react-multi-date-picker/styles/layouts/mobile.css";
import DateTimePicker from "../UI/DateTimePicker/DateTimePicker";
import * as DoctorActions from "../../store/actions/DoctorActions";
import {Button, Card, Container, Form, Modal, Row} from "react-bootstrap";
import UploadImage from "../UI/UploadImage/UploadImage";
import * as authActions from "../../store/actions/AuthActions";
import {useFormik} from "formik";
import * as Yup from "yup";


const ManageDoctors = (props) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [availability, setAvailability] = useState();
    const [fee, setfee] = useState();
    const [img,setImg] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formattedDates = [];
    const doctor = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        role: "doctor",
        availability:formattedDates,
        img: img,
        fee: fee,
        totalBalance: 0
    };

    useEffect(() => {
        props.clearRegisteredStatus();
        props.getAllDoctors();
    },[]);

    const clearFormField = () => {
        setEmail('');
        setPassword('');
        setName('');
        setPhone('');
        setAvailability('');
    }

    const onDeleteClick = (id) => {
        const filteredDoctor = props.doctors.filter(doc => doc.id === id)[0];
        Swal.fire({
            title: 'Please wait...',
            html: '',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        })
        props.onDeleteDoctor(filteredDoctor);
    }

    if(props.isRegistered) {
        Swal.close();
        Swal.fire('Doctor Added!','','success');
        props.clearRegisteredStatus();
    }

    if(props.isUserRemoved) {
        Swal.close();
        props.clearUserRemovedStatus();
        Swal.fire('Doctor Deleted!','','success');
    }

    const setProfileImg = (img) => {
       setImg(img);
    }


    let initValues = {
        email: '',
        password: '',
        name: '',
        phone: '',
        fee: '',
        availability: '',
        img: null
    }

    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
            email: '',
            password: '',
            name: '',
            phone: '',
            fee: '',
            availability: '',
            img: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().max(20, 'Email must be shorter than 10 characters').required().email(),
            password: Yup.string().min(6, 'Password should be longer than 6 characters').required(),
            name: Yup.string().required().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
            phone: Yup.number().required(),
            fee: Yup.number().required(),
        }),
        onSubmit: ({email, password, name, phone, fee}) => {
            availability.map(av => {
                formattedDates.push(av.format("MMMM DD YYYY HH:mm A"));
            });
            const doctor = {
                name: name,
                email: email,
                password: password,
                phone: phone,
                role: "doctor",
                availability:formattedDates,
                img: img,
                fee: fee,
                totalBalance: 0
            };
            Swal.fire({
                title: 'Please wait...',
                html: '',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            })
            props.onAddDoctor(doctor);
            clearFormField();
            handleClose();
        }
    });

    return (
        <>
            <ViewDoctors heading="Manage Doctors" doctors={props.doctors} onDeleteClick={onDeleteClick}/>
            <Container className= "w-50">
                <Row className={"d-flex justify-content-center pt-3 pb-3"}>
                    <Button variant="primary" onClick={handleShow}>
                        Add a Doctor
                    </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header className="d-flex justify-content-center">
                        <Modal.Title>Add Doctor</Modal.Title>
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
                                    <Form.Group>
                                        <Form.Label>Fee</Form.Label>
                                        <Form.Control type="number"
                                                      value={values.fee}
                                                      onChange={handleChange}
                                                      onBlur={handleBlur}
                                                      id="fee"
                                                      className={touched.fee && errors.fee && "border-danger"}/>
                                        {touched.phone && errors.phone ? (
                                            <div className="text-danger h6 pt-2 pb-2">{errors.fee}</div>
                                        ): null}
                                    </Form.Group>
                                    <Form.Group id="availability">
                                        <Form.Label>Availability</Form.Label>
                                        <div className="col-md-10">
                                            <DateTimePicker availability={availability} setAvailability={setAvailability}/>
                                        </div>
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
    );
}

const mapStateToProps = state => {
    return {
        isRegistered: state.authRdcr.isRegistered,
        isUserRemoved: state.doctorRdcr.isUserRemoved,
        doctors: state.doctorRdcr.doctors,
        gotDoctors: state.doctorRdcr.gotDoctors
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddDoctor: (doctor) => dispatch(authActions.registerInit(doctor,"doctor")),
        onDeleteDoctor: (doctor) => dispatch(authActions.removeUserInit(doctor,"doctor")),
        getAllDoctors: () => dispatch(DoctorActions.getDoctorsInit()),
        clearRegisteredStatus: () => dispatch(authActions.clearRegisteredStatus()),
        clearUserRemovedStatus: () => dispatch(DoctorActions.clearUserRemovedStatus())
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(ManageDoctors);