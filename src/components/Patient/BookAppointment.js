import React, {useEffect, useState} from "react";
import {Card, Container, Form} from "react-bootstrap";
import * as PatientActions from '../../store/actions/PatientActions';
import {connect} from "react-redux";
import Swal from "sweetalert2";
import * as DoctorActions from "../../store/actions/DoctorActions";
import StripePayment from "../UI/StripePayment/StripePayment";
import logo from '../../assets/images/logo.png';
import{ init } from 'emailjs-com';
import sendEmail from "../../emailSender";
init("user_rXFdbUGC883OnZ2dBYK1u");


const BookAppointment = (props) => {
    const [doctor,setDoctor] = useState();
    const [availability,setAvailability] = useState();
    const [symptoms,setSymptoms] = useState();

    useEffect(()=>{
        props.getAllDoctors();
    },[]);

    const validate = (e) => {
        if(!doctor){
            Swal.fire('Please choose a doctor', '', 'error');
            e.stopPropagation();
        }
        else if(!availability) {
            Swal.fire('Availability cannot be empty!', '', 'error');
            e.stopPropagation();
        }
        else if(!symptoms) {
            Swal.fire('Symptoms cannot be empty!', '', 'error');
            e.stopPropagation();
        }
    }

    const onBookAppointmentClick = (token) => {
            if (props.patient && token) {
                const appointment = {
                    patientId: props.patient.id,
                    name: props.patient.name,
                    email: props.patient.email,
                    phone: props.patient.phone,
                    symptoms: symptoms,
                    doctorId: doctor.id,
                    doctorName: doctor.name,
                    doctorEmail: doctor.email,
                    availability: availability,
                    doctorTotalBalance: parseInt(doctor.totalBalance) + parseInt(doctor.fee),
                    status: 'active'
                };
                const appointmentEmail = {
                    fromName: props.patient.name,
                    toName: doctor.name,
                    message: "A new appointment has been booked, this is the message " +
                        "from the patient = '" + symptoms + "'",
                    toMail: doctor.email,
                };
                props.bookAppointment(appointment);
                Swal.fire({
                    title: 'Please wait...',
                    html: '',
                    allowEscapeKey: false,
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading()
                    }
                });
                sendEmail(appointmentEmail, "template_cdrprtd");
            }
    }

    if(props.isAppointmentBooked){
        Swal.close();
        Swal.fire('Appointment Booked!','','success');
        props.resetAppointmentBookStatus();
    }

    return(
        <Container>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Book Appointment!</h2>
                    <Form>
                        <Form.Group  className="mb-3">
                            <Form.Label className="h6">Doctors</Form.Label>
                            <Form.Control as="select" id="doctorName" onChange={(event)=>{
                                setDoctor(props.doctors.filter(doc => doc.id === event.target.value)[0]);
                              }
                            }>
                                <option>Select a doctor</option>
                                {
                                    (props.doctors && props.doctors.length > 0) ? (
                                        props.doctors.map(doctor => (
                                            <option key={doctor.id} value={doctor.id}> {doctor.name} </option>
                                        ))
                                    ) : ''
                                }
                            </Form.Control>
                        </Form.Group>
                        <Form.Group  className="mb-3">
                            <Form.Label className="h6">Availability</Form.Label>
                            <Form.Control as="select" onChange={(event)=>{setAvailability(event.target.value)}}>
                                <option>Select availability time</option>
                                {
                                    (doctor && doctor.availability) ? (
                                    doctor.availability.map((avlblty,index) => (
                                       <option key={index} value={avlblty}> {avlblty} </option>  ))
                                     ): ''
                                }
                            </Form.Control>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label className="h6">Symptoms</Form.Label>
                            <Form.Control as="textarea" rows={3}  onChange={(event)=>{setSymptoms(event.target.value)}}/>
                        </Form.Group>
                    </Form>
                    <StripePayment label={"Book Now"}
                                   name={"Medicure"}
                                   desc={"Fee"}
                                   panelLabel={"Pay Now"}
                                   img={logo} price={doctor ? doctor.fee : 100}
                                   onPaymentSubmit={onBookAppointmentClick}
                                   publishableKey={process.env.REACT_APP_PUBLISHABLE_KEY}
                                   btnStyle={"w-100 bg-primary border-primary p-2"}
                                   validate={validate}
                    />
                </Card.Body>
            </Card>
        </Container>
    );
};

const mapStateToProps = state => {
    return {
        doctors: state.doctorRdcr.doctors,
        patient: state.authRdcr.user,
        isAppointmentBooked: state.patientRdcr.appointmentBooked
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctors: () => dispatch(DoctorActions.getDoctorsInit()),
        bookAppointment: (appointment) => {
            dispatch(PatientActions.bookAppointmentInit(appointment))
        },
        resetAppointmentBookStatus: () => dispatch(PatientActions.resetAppointmentBookStatus())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(BookAppointment);