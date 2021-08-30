import React , {useState} from "react";
import {Form, Card, Button, Container} from 'react-bootstrap';
import {connect} from "react-redux";
import * as authActions from '../../store/actions/AuthActions';
import {Link, Redirect, useHistory} from "react-router-dom";
import Swal from "sweetalert2";

const Login = (props) => {

    const history = useHistory();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [validated, setValidated] = useState(false);

    const isFormValid = () => {
        return email && password;
    }

    if(props.user){
        Swal.close();
        const role = props.user.role;
        if("patient" === role) {
            history.push('/patientHome');
        }
        else if ("admin" === role){
            history.push('/adminHome');
        }
        else if ("doctor" === role){
            history.push('/doctorHome');
        }
    }

    const handleSubmit = (event) => {
/*        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }*/
       // setValidated(true);
        event.preventDefault();
        Swal.fire({
            title: 'Please wait...',
            html: '',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        });
        props.onSubmit(email, password)
    };

    return(
        <>
            <Container className= "w-auto float-end">
                <Card>
                   <Card.Body className="p-4">
                        <h2 className="text-center mb-4">Login</h2>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group id="email" controlId="validationCustom01">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required onChange={(event)=>{setEmail(event.target.value)}}/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group id="password" controlId="validationCustom02">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"  required onChange={(event)=>{setPassword(event.target.value)}}/>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Button className="w-100 mt-4" type={"submit"}>
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <div className="w-100 text-center mt-2">
                            Create an account?
                            <Link to='/signup'><b>Sign Up!</b></Link>
                        </div>
                    </Card.Footer>
                </Card>
            </Container>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.authRdcr.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (email,pswd) => {
            const user = {
                email: email,
                password: pswd
            }
            dispatch(authActions.loginInit(user));
        }
    }
};





export default connect (mapStateToProps, mapDispatchToProps)(Login);