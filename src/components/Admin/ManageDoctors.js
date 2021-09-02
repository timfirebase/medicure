import React, {useEffect, useState} from "react";
import ViewDoctors from "./ViewDoctors";
import Swal from "sweetalert2";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import "react-multi-date-picker/styles/layouts/mobile.css";
import DateTimePicker from "../UI/DateTimePicker/DateTimePicker";
import * as DoctorActions from "../../store/actions/DoctorActions";
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const ManageDoctors = (props) => {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [availability, setAvailability] = useState();

    const formattedDates = [];
    const doctor = {
        name: name,
        email: email,
        password: password,
        phone: phone,
        role: "doctor",
        availability:formattedDates
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

    const useStyles = makeStyles({
        content: {
            justifyContent: "center"
        }
    });

    const classes = useStyles();

    const Accordion = withStyles({
        root: {
            border: '2px solid rgba(0, 0, 0, .125)',
            boxShadow: 'none',
            '&:not(:last-child)': {
                borderBottom: 0,
            },
            '&:before': {
                display: 'none',
            },
            '&$expanded': {
                margin: 'auto',
            },
        },
        expanded: {},
    })(MuiAccordion);

    return (
        <>
            <ViewDoctors heading="Manage Doctors" doctors={props.doctors} onDeleteClick={onDeleteClick}/>
            <Container className= "w-50">
                <Row className={"d-flex justify-content-center pt-3 pb-3"}>
                    <Accordion className={"justify-content-center border-primary"}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            classes={{ content: classes.content }}
                        >
                            <span className="h2 text-center">Add a Doctor</span>
                        </AccordionSummary>
                        <AccordionDetails>
                                <Card className={"w-100"}>
                                    <Card.Body>
                                        <Form autoComplete="off">
                                            <Form.Group id="name">
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control type="text" required value={name} onChange={(event)=>{setName(event.target.value)}}/>
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
                                                    }}>
                                                Add
                                            </Button>
                                        </Form>
                                    </Card.Body>
                                </Card>
                        </AccordionDetails>
                    </Accordion>
                </Row>
            </Container>
        </>
    );
}

const mapStateToProps = state => {
    return {
        isRegistered: state.doctorRdcr.isRegistered,
        isUserRemoved: state.doctorRdcr.isUserRemoved,
        doctors: state.doctorRdcr.doctors,
        gotDoctors: state.doctorRdcr.gotDoctors
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAddDoctor: (doctor) => dispatch(DoctorActions.registerDocInit(doctor)),
        onDeleteDoctor: (doctor) => dispatch(DoctorActions.removeDoctorInit(doctor)),
        getAllDoctors: () => dispatch(DoctorActions.getDoctorsInit()),
        clearRegisteredStatus: () => dispatch(DoctorActions.clearRegisteredStatus()),
        clearUserRemovedStatus: () => dispatch(DoctorActions.clearUserRemovedStatus())
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(ManageDoctors);