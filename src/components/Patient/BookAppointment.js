import React, {useState} from "react";
import {Button, Card, Container, Form} from "react-bootstrap";

const BookAppointment = () => {
    const [doctor,setDoctor] = useState();
    const [availability,setAvailability] = useState();
    const [symptoms,setSymptoms] = useState();

    const onBookAppointmentClick = (event) => {
        event.preventDefault();
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
                                <option>Asad</option>
                                <option>Bilal</option>
                                <option>Saif</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="formGridState"  className="mb-3">
                            <Form.Label className="h6">Availability</Form.Label>
                            <Form.Control as="select" onChange={(event)=>{setAvailability(event.target.value)}}>
                                <option>Select availability time</option>
                                <option>Asad</option>
                                <option>Bilal</option>
                                <option>Saif</option>
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

export default BookAppointment;