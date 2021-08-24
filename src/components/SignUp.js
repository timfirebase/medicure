import React , {useState} from "react"
import {Form, Card, Button, Container} from 'react-bootstrap'
import {connect} from "react-redux";
import * as authActions from '../store/actions/AuthActions';

const SignUp = (props) => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    return(
        <>
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
                            <Button className="w-100 mt-4" type={"submit"} onClick={() => props.onSubmit(email, password, props.roleId)}>
                                Sign Up
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Already have an account? Log in!
                </div>
            </Container>
        </>
    )
}

const mapStateToProps = state => {
    return {
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onSubmit: (email,pswd,roleId) => {
            const user = {
                email: email,
                pswd: pswd,
                roleId: roleId
            };
            dispatch(authActions.registerAsync(user))
        }
    }
};

export default connect (mapStateToProps, mapDispatchToProps)(SignUp);