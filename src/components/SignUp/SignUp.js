import React , {useState} from "react"
import {Form, Card, Button, Container, Spinner} from 'react-bootstrap'
import {connect} from "react-redux";
import * as authActions from '../../store/actions/AuthActions';
import {Link, Redirect} from "react-router-dom";

const SignUp = (props) => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    let homeRoute = '';
    if(props.isRegistered){
        homeRoute =  <Redirect to="/login"/>
    }

    return(
        <>
            {homeRoute}
            <Container className= "w-auto float-end">
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Sign up!</h2>
                        <Form>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required onChange={(event)=>{setEmail(event.target.value)}}/>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password"  required onChange={(event)=>{setPassword(event.target.value)}}/>
                            </Form.Group>
                            <Button className="w-100 mt-4" type={"button"} onClick={() => props.onSubmit(email, password, props.roleId)}>
                                Sign Up
                            </Button>
                        </Form>
                    </Card.Body>
                    <Card.Footer>
                        <div className="w-100 text-center mt-2">
                            Already have an account?
                            <Link to='/login'><b>Log in!</b></Link>
                        </div>
                    </Card.Footer>
                </Card>
            </Container>
        </>
    )
}

const mapStateToProps = state => {
    return {
        isRegistered: state.authRdcr.isRegistered
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (email,pswd,role) => {
            const user = {
                email: email,
                password: pswd,
                role: role
            };
            dispatch(authActions.registerInit(user))
        }
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(SignUp);