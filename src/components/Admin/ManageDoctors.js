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


const ManageDoctors = (props) => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [availability, setAvailability] = useState();
    const [docFee, setDocFee] = useState();
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
        fee: docFee,
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

    useEffect(() => {
        if(props.isRegistered) {
            Swal.close();
            Swal.fire('Doctor Added!','','success');
            props.clearRegisteredStatus();
        }
    },[props.isRegistered])

    useEffect(()=>{
        if(props.isUserRemoved) {
            Swal.close();
            props.clearUserRemovedStatus();
            Swal.fire('Doctor Deleted!','','success');
        }
    },[props.isUserRemoved])

    const setProfileImg = (img) => {
       setImg(img);
    }

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
                                    <Form.Group id="fee">
                                        <Form.Label>Fee</Form.Label>
                                        <Form.Control type="number" required value={docFee} onChange={(event)=>{setDocFee(event.target.value)}}/>
                                    </Form.Group>
                                    <Form.Group id="availability">
                                        <Form.Label>Availability</Form.Label>
                                        <div className="col-md-10">
                                            <DateTimePicker availability={availability} setAvailability={setAvailability}/>
                                        </div>
                                    </Form.Group>
                                    <Button className="w-100 mt-4 btn-md" type={"submit"}
                                            onClick={(event) => {
                                                event.preventDefault();
                                                availability.map(av => {
                                                    formattedDates.push(av.format("MMMM DD YYYY HH:mm A"));
                                                });
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