import React , {useState} from "react";
import {Form, Card, Button, Container} from 'react-bootstrap';
import {connect} from "react-redux";
import * as authActions from '../../store/actions/AuthActions';
import {Link, Redirect} from "react-router-dom";

const Login = (props) => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    let homeRoute = '';
    if(props.user){
        const role = props.user.role;
        if("patient" === role) {
            homeRoute =  <Redirect to="/patientHome"/>
        }
        else if ("admin" === role){
            homeRoute =  <Redirect to="/adminHome"/>
        }
    }
    let msg = '';

    if(props.isRegistered) {
        msg = (<span className="bg-success text-white p-2 h6">Admin has been registered</span>);
    }

    return(
        <>
            {msg}
            {homeRoute}
            <Container className= "w-auto float-end">
                <Card>
                    <Card.Body className="p-4">
                        <h2 className="text-center mb-4">Login</h2>
                        <Form>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required onChange={(event)=>{setEmail(event.target.value)}}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"  required onChange={(event)=>{setPassword(event.target.value)}}/>
                            </Form.Group>
                            <Button className="w-100 mt-4" type={"submit"}
                                    onClick={(event) => {
                                         event.preventDefault();
                                         props.onSubmit(email, password)}
                                    }>
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
            };
            dispatch(authActions.loginInit(user));
        }
    }
};





export default connect (mapStateToProps, mapDispatchToProps)(Login);