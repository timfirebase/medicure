import React, {useEffect, useState} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";
import * as PatientActions from '../../store/actions/PatientActions';
import {connect} from "react-redux";

const BookAppointment = (props) => {
    const [doctor,setDoctor] = useState();
    const [availability,setAvailability] = useState();
    const [symptoms,setSymptoms] = useState();
    const [doctorsList,setDoctorsList] = useState([]);

    useEffect(()=>{
        props.getAllDoctors();
    },[]);

    const onBookAppointmentClick = (event) => {
        event.preventDefault();
        const patient = {
            patientId: props.patient.id,
            symptoms: symptoms,
        }
        console.log(doctor);
        console.log(availability);
        console.log(symptoms);
    }

    return(
        <Container>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Book Appointment!</h2>
                    <Form>
                        <Form.Group controlId="formGridState"  className="mb-3">
                            <Form.Label className="h6">Doctors</Form.Label>
                            <Form.Control as="select" onChange={(event)=>{setDoctor(event.target.value)}}>
                                <option>Select a doctor</option>
                                <option key={"WloGSAOjyNgH5F8exQ9I3WAMaIk2"} value={"WloGSAOjyNgH5F8exQ9I3WAMaIk2"}> {"doc1"} </option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formGridState"  className="mb-3">
                            <Form.Label className="h6">Availability</Form.Label>
                            <Form.Control as="select" onChange={(event)=>{setAvailability(event.target.value)}}>
                                <option>Select availability time</option>
                                <option key={"0"} value={"3 sept 2021 3pm"}> {"3 sept 2021 3pm"} </option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label className="h6">Symptoms</Form.Label>
                            <Form.Control as="textarea" rows={3}  onChange={(event)=>{setSymptoms(event.target.value)}}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Button className="w-100" type={"submit"} onClick={onBookAppointmentClick}>
                                Book
                            </Button>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        doctors: state.patientRdcr.doctors,
        patient: state.authRdcr.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctors: () => dispatch(PatientActions.getDoctorsInit()),
        bookAppointment: (doctorId) => {
            dispatch(PatientActions.bookAppointmentInit(doctorId,))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(BookAppointment);