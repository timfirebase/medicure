import React, {useState} from "react";
import ViewDoctors from "./ViewDoctors";
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import Swal from "sweetalert2";
import {Link, useHistory} from "react-router-dom";
import * as authActions from "../../store/actions/AuthActions";
import {connect} from "react-redux";
import * as PatientActions from "../../store/actions/PatientActions";

const ManageDoctors = (props) => {

    const history = useHistory();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');

    const clearFormField = () => {
        setEmail('');
        setPassword('');
        setName('');
        setPhone('');
    }

    return (
        <>
            <ViewDoctors heading="Manage Doctors"/>

            <Container className= "w-auto">
                <Row>
                    <Card className={"mt-4 mb-4"} style={{width:'50%', marginLeft:'1%'}}>
                        <Card.Body className="p-3">
                            <h2 className="text-center mb-4">Add a Doctor</h2>
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
                                <Button className="w-100 mt-4" type={"submit"}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            Swal.fire('Doctor Added!','','success');
                                            const doctor = {
                                                name: name,
                                                email: email,
                                                password: password,
                                                phone: phone,
                                                role: "doctor"
                                            };
                                            clearFormField();
                                            props.updateDoctors(doctor);
                                            props.onSubmit(doctor);
                                        }}>
                                    Add
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>

                    <Card className={"mt-4 mb-4"} style={{width : '40%' ,marginLeft : '8%'}}>
                        <Card.Body className="p-3">
                            <h2 className="text-center mb-4">Remove a Doctor</h2>
                            <Form>
                                <Form.Group id="name">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="number" required onChange={(event)=>{setName(event.target.value)}}/>
                                </Form.Group>
                                <Button className="w-100 mt-4" type={"submit"}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            Swal.fire('Doctor Added!','','success');
                                            const doctor = {
                                                name: name,
                                                email: email,
                                                password: password,
                                                phone: phone,
                                                role: "doctor"
                                            };
                                            clearFormField();
                                            props.updateDoctors(doctor);
                                            props.onSubmit(doctor);
                                        }
                                        }>
                                    Remove
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </>
    );
}

const mapStateToProps = state => {
    return {
        isRegistered: state.authRdcr.isRegistered
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (doctor) => {
            dispatch(authActions.registerInit(doctor))
        },
        updateDoctors: (doctor) => dispatch(PatientActions.updateDocGrid(doctor))
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(ManageDoctors);